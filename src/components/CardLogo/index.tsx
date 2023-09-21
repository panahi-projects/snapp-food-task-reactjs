import styled from 'styled-components';
import './CardLogo.scss';

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
    <Logo className="logo">
      <Image src={logo} />
    </Logo>
  );
}

export default CardLogo;
