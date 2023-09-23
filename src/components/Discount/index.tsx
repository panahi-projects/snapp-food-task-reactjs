import { FaPercentage } from 'react-icons/fa';
import style from './Discount.module.scss';

interface Props {
  value: number;
}
function Discount({ value }: Props) {
  return (
    <span className={style.discount}>
      <span className={style.discount_value}>
        <span>تا</span>
        {value} <FaPercentage size={8} />
      </span>
    </span>
  );
}

export default Discount;
