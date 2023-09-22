import { FaPercentage } from 'react-icons/fa';
import './Discount.scss';

interface Props {
  value: number;
}
function Discount({ value }: Props) {
  return (
    <span className="discount">
      <span className="discount-value">
        <span>تا</span>
        {value} <FaPercentage size={8} />
      </span>
    </span>
  );
}

export default Discount;
