import {Link, useLocation} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <header>
      <div className='logo-container'>
        <div>
          <img src="/images/SWP HORIZONTAL.png" alt="Logo" />
          </div>
      </div>
      <div className="nav-container">
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>Community</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
      </nav>
      </div>
    </header>
  );
}
