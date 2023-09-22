import './Card.scss';
import styled from 'styled-components';
import CardLogo from '../CardLogo';
import { IRestaurantData } from '../../interfaces';
import Rating from '../Rating';
import BestCoupon from '../BestCoupon';
import Discount from '../Discount';

interface CardProps {
  data: IRestaurantData;
  width?: string;
}
interface ICard {
  cardWidth: string;
}
const CardContainer = styled.div<ICard>`
  width: ${(props) => props.cardWidth};
`;

function Card({ data: restaurant, width = '200px' }: CardProps) {
  const additionalDetails = (deliveryFee: number, isZFExpress: boolean) => {
    return (
      <>
        <span className="delivery-type">{isZFExpress ? ' ارسال اکسپرس ' : ' پیک فروشنده '}</span>
        <span className="delivery-fee">
          {deliveryFee && deliveryFee > 0 ? `${deliveryFee.toLocaleString('fa-IR')} تومان` : 'رایگان'}
        </span>
      </>
    );
  };
  return (
    <CardContainer cardWidth={width} className="card">
      {restaurant.best_coupon && <BestCoupon coupon={restaurant.best_coupon} />}
      <div className="card-image" style={{ backgroundImage: `url(${restaurant.backgroundImage})` }}></div>
      <div className="card-content">
        <div className="card-logo">
          <CardLogo logo={restaurant.logo} />
        </div>
        <div className="card-details">
          <div className="main-row">
            <p className="title-container">
              <span className="title">{restaurant.title} </span>
              {restaurant.discountValueForView > 0 && <Discount value={restaurant.discountValueForView} />}
            </p>
            <p className="rate">
              <Rating rate={restaurant.rate} />
              <span className="vote-count">({restaurant.voteCount?.toLocaleString('fa-IR')})</span>
            </p>
          </div>
          <p className="description">{restaurant.description?.replace(/\,/gi, ' ')}</p>
          <p className="additional">{additionalDetails(restaurant.deliveryFee, restaurant.isZFExpress)}</p>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;
