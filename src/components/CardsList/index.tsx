import { useEffect, useState } from 'react';
import useResponsive from '../../hooks/useResponsive';
import useRestaurants from '../../hooks/useRestaurans';
import useViewport from '../../hooks/useViewport';
import Card from '../Card';
import './CardsList.scss';

function CardsList() {
  const { data, error, isLoading } = useRestaurants();
  const { width: viewportWidth } = useViewport();
  const breakpoint = useResponsive();

  const smallerWidth = viewportWidth - 50; // 50 pixels smaller

  const [width, setWidth] = useState<string>('');

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

  return (
    <div className="list">
      {data.map(({ data: item, type }) => {
        return type.toLowerCase() === 'vendor' && <Card key={item.id} data={item} width={width} />;
      })}
    </div>
  );
}

export default CardsList;
