import styled from 'styled-components';

import style from './CardLogo.module.scss';
import Placeholder from '@assets/images/150x150.png';

interface Props {
  logo: string;
}

const Image = styled.img`
  height: 64px;
`;
const Logo = styled.div`
  height: calc(64px + 10px);
`;

function CardLogo({ logo }: Props) {
  return (
    <Logo className={style.logo}>
      <Image src={Placeholder && logo} />
    </Logo>
  );
}

export default CardLogo;
