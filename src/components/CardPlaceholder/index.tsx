import styled from 'styled-components';
import style from './CardPlaceholder.module.scss';

interface Props {
  width: string;
}
interface ICard {
  cardWidth: string;
}
const CardContainer = styled.div<ICard>`
  width: ${(props) => props.cardWidth};
`;
function CardPlaceholder({ width }: Props) {
  const lines = Array.from(Array(8 + 1).keys()).slice(1);
  return (
    <CardContainer cardWidth={width} className={style.container}>
      <div className={style.content}>
        {lines.map((line, index) => (
          <div className={`${style.line} ${style[`line__${index + 1}`]}`}></div>
        ))}
        <div className={style.circle}></div>
      </div>
    </CardContainer>
  );
}

export default CardPlaceholder;
