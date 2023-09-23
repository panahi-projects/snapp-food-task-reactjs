import { AiFillStar } from 'react-icons/ai';
import style from './Rating.module.scss';

interface Props {
  rate: number;
}
function Rating({ rate }: Props) {
  return (
    <span className={style.rating}>
      <span className={style.rating_number}>
        <AiFillStar />
      </span>
      <span id="rate" className={style.rating_number}>
        {rate}
      </span>
    </span>
  );
}

export default Rating;
