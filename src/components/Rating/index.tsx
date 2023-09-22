import { AiFillStar } from 'react-icons/ai';
import './Rating.scss';

interface Props {
  rate: number;
}
function Rating({ rate }: Props) {
  return (
    <span className="rating">
      <span className="rating-number">
        <AiFillStar />
      </span>
      <span className="rating-number">{rate}</span>
    </span>
  );
}

export default Rating;
