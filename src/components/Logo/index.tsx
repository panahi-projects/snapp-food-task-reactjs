import './Logo.scss';
import logo from '../../assets/images/snapp_food_400x400.png';

interface Props {
  size?: number;
}

function Logo({ size = 60 }: Props) {
  return <img className="logo" src={logo} width={size} />;
}

export default Logo;
