import style from './CardPlaceholder.module.scss';

function CardPlaceholder() {
  const lines = Array.from(Array(8 + 1).keys()).slice(1);
  return (
    <div className={style.container}>
      <div className={style.content}>
        {lines.map((line, index) => (
          <div className={`${style.line} ${style[`line__${index + 1}`]}`}></div>
        ))}
        <div className={style.circle}></div>
      </div>
    </div>
  );
}

export default CardPlaceholder;
