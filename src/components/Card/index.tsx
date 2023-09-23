import styled from 'styled-components';

import style from './Card.module.scss';
import BestCoupon from '@components/BestCoupon';
import CardLogo from '@components/CardLogo';
import Discount from '@components/Discount';
import Rating from '@components/Rating';
import { IRestaurantData } from '@interfaces/index';
import { DeliveryFee, DeliveryType } from '@constants/index';

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
        <span className={style.delivery_type}>{isZFExpress ? DeliveryType.EXPRESS : DeliveryType.SHOP_DELIVERY}</span>
        <span className={style.delivery_fee}>
          {deliveryFee && deliveryFee > 0
            ? `${deliveryFee.toLocaleString('fa-IR')} ${DeliveryFee.IR_CURRENCY}`
            : DeliveryFee.FREE}
        </span>
      </>
    );
  };
  return (
    <CardContainer cardWidth={width} className={style.card}>
      {restaurant.best_coupon && <BestCoupon coupon={restaurant.best_coupon} />}
      <div className={style.card_image} style={{ backgroundImage: `url(${restaurant.backgroundImage})` }}></div>
      <div className={style.card_content}>
        <div className={style.card_logo}>
          <CardLogo logo={restaurant.logo} />
        </div>
        <div className={style.card_details}>
          <div className={style.main_row}>
            <p className={style.title}>
              <span className={style.title_container}>{restaurant.title} </span>
              {restaurant.discountValueForView > 0 && <Discount value={restaurant.discountValueForView} />}
            </p>
            <p className={style.rate}>
              <Rating rate={restaurant.rate} />
              <span className={style.vote_count}>({restaurant.voteCount?.toLocaleString('fa-IR')})</span>
            </p>
          </div>
          <p className={style.description}>{restaurant.description?.replace(/\,/gi, ' ')}</p>
          <p className={style.additional}>{additionalDetails(restaurant.deliveryFee, restaurant.isZFExpress)}</p>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;
