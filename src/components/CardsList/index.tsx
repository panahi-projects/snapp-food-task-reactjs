import useRestaurants from '../../hooks/useRestaurans';
import Card from '../Card';
import './CardsList.scss';

function CardsList() {
  const { data, error, isLoading } = useRestaurants();

  return (
    <div className="list">
      <ul>
        {data.map(({ data: item, type }) => {
          return type.toLowerCase() === 'vendor' && <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      {/* {data.map((item) => (
        <Card
          key={a}
          itemName="کباب کوبیده"
          itemDetails="کباب کوبیده گوسفندی 200 گرمی"
          imageURL="https://cdn.snappfood.ir/400x266/uploads/images/vendors/covers/613471295f084.jpg"
        />
      ))} */}
    </div>
  );
}

export default CardsList;
