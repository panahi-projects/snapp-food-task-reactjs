import './BestCoupon.scss';
import PRO from '../../assets/images/svgexport-13.svg';

interface Props {
  coupon: string;
  type?: string;
}

function BestCoupon({ coupon }: Props) {
  return (
    <div className="coupon-container">
      <div className="coupon">
        <img src={PRO} alt="pro" />
        <span className="coupon-text">{coupon}</span>
      </div>
    </div>
  );
}

export default BestCoupon;
