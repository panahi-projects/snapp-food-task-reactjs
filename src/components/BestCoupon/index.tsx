import './BestCoupon.scss';

interface Props {
  coupon: string;
  type?: string;
}

function BestCoupon({ coupon }: Props) {
  return (
    <div className="coupon-container">
      <div className="coupon">
        <span className="coupon-text">{coupon}</span>
      </div>
    </div>
  );
}

export default BestCoupon;
