import useResponsive from '../../hooks/useResponsive';
import useRestaurants from '../../hooks/useRestaurans';
import Card from '../Card';
import './CardsList.scss';

function CardsList() {
  const breakpoint = useResponsive();
  console.log({ breakpoint });
  const { data, error, isLoading } = useRestaurants();

  return (
    <div className="list">
      {data.map(({ data: item, type }) => {
        return (
          type.toLowerCase() === 'vendor' && (
            <Card
              key={item.id}
              itemName={item.title}
              itemDetails={item.description}
              logo={item.logo}
              imageURL={item.backgroundImage}
              breakpoint={breakpoint}
            />
          )
        );
      })}
    </div>
  );
}

export default CardsList;
