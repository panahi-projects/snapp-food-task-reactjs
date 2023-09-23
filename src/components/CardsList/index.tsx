import { useEffect, useState, useRef } from 'react';

import style from './CardsList.module.scss';
import Card from '@components/Card';
import useRestaurants from '@hooks/useRestaurans';
import useViewport from '@hooks/useViewport';
import useResponsive from '@hooks/useResponsive';
import { Breakpoints, RestaurantType, Sizes } from '@constants/index';
import CardPlaceholder from '@components/CardPlaceholder';
import { IRestaurant } from '@interfaces/index';

function CardsList() {
  const page = useRef(0);
  const observerTarget = useRef(null);

  const { data, error, isLoading, fetchData } = useRestaurants();
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [width, setWidth] = useState<string>('');

  const { width: viewportWidth } = useViewport();
  const breakpoint = useResponsive();
  const smallerWidth = viewportWidth - 50; // 50 pixels smaller

  const placeholders = Array.from(Array(20 + 1).keys()).slice(1); //generate an array with 20 cells

  useEffect(() => {
    switch (breakpoint) {
      case Breakpoints.SM:
        setWidth(`${smallerWidth}px`);
        break;
      case Breakpoints.MD:
        setWidth(`${400}px`);
        break;
      case Breakpoints.LG:
      case Breakpoints.XL:
        setWidth(`${Sizes.CONTAINER_MAX_WIDTH}px`);
        break;
      default:
        setWidth(`${smallerWidth}px`);
        break;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log({ entries });

        if (entries[0].isIntersecting) {
          ++page.current;
          fetchData(page.current);
        }
      },
      { threshold: 0.25 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  useEffect(() => {
    setRestaurants(restaurants.concat(data));
  }, [data]);

  return (
    <div className={style.list}>
      {isLoading && placeholders.map((p, index) => <CardPlaceholder key={`ph_${index}`} width={width} />)}
      {restaurants.map(({ data: item, type }) => {
        return type.toLowerCase() === RestaurantType.VENDOR && <Card key={item.id} data={item} width={width} />;
      })}
      <div ref={observerTarget}></div>
    </div>
  );
}

export default CardsList;
