import Logo from '../Logo';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">صفحه اصلی</a>
        </li>
        <li>
          <a href="#">رستوران ها</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
