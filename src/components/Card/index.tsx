import { useState, useEffect } from 'react';
import { Breakpoint } from '../../interfaces';
import './Card.scss';
import styled from 'styled-components';
import CardLogo from '../CardLogo';

interface CardProps {
  imageURL: string;
  itemName: string;
  itemDetails: string;
  logo: string;
  breakpoint: Breakpoint;
}
interface ICard {
  cardWidth: string;
}
const CardContainer = styled.div<ICard>`
  width: ${(props) => props.cardWidth};
`;
function Card({ imageURL, itemName, itemDetails, logo, breakpoint }: CardProps) {
  const [width, setWidth] = useState<string>('');

  useEffect(() => {
    switch (breakpoint) {
      case 'sm':
        setWidth(`${200}px`);
        break;
      case 'md':
        setWidth(`${400}px`);
        break;
      case 'lg':
        setWidth(`${600}px`);
        break;
      case 'xl':
        setWidth(`${650}px`);
        break;
      default:
        setWidth(`${200}px`);
        break;
    }
  }, []);

  return (
    <CardContainer cardWidth={width} className="card">
      <div className="card-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
      <div className="card-content">
        <div className="card-logo">
          <CardLogo logo={logo} />
        </div>
        <div className="card-details">
          <div className="main-row">
            <p className="title">{itemName}</p>
            <p className="rating">4.3 (45563)</p>
          </div>
          <p className="description">{itemDetails}</p>
          <p className="additional">{itemDetails}</p>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;
