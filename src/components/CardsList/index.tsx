import { useEffect, useState, useRef } from 'react';

import Card from '../Card';
import { IRestaurant } from '../../interfaces';
import style from './CardsList.module.scss';
import useRestaurants from '@hooks/useRestaurans';
import useViewport from '@hooks/useViewport';
import useResponsive from '@hooks/useResponsive';
import { RestaurantType } from '@constants/index';
import CardPlaceholder from '@components/CardPlaceholder';

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
      case 'sm':
        setWidth(`${smallerWidth}px`);
        break;
      case 'md':
        setWidth(`${400}px`);
        break;
      case 'lg':
      case 'xl':
        setWidth(`${567}px`);
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
      {(isLoading || !restaurants.length) && placeholders.map((p) => <CardPlaceholder />)}
      {restaurants.map(({ data: item, type }) => {
        return type.toLowerCase() === RestaurantType.VENDOR && <Card key={item.id} data={item} width={width} />;
      })}
      <div ref={observerTarget}></div>
    </div>
  );
}

export default CardsList;
