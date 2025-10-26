import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src="/images/little-lemon-logo.png" alt="Little Lemon Logo" />
      </div>
      <ul className="nav__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
