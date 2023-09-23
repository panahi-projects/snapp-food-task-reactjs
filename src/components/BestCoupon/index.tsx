import style from './BestCoupon.module.scss';
import PRO from '@assets/images/svgexport-13.svg';

interface Props {
  coupon: string;
  type?: string;
}

function BestCoupon({ coupon }: Props) {
  return (
    <div className={style.coupon}>
      <div className={style.coupon_container}>
        {coupon.toLowerCase().includes('pro') && <img src={PRO} alt="pro" />}
        <span className={style.coupon_text}>{coupon}</span>
      </div>
    </div>
  );
}

export default BestCoupon;
