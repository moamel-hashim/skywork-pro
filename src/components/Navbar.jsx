import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className='logo-container'>
        <div>
          <img src="/images/SWP HORIZONTAL.png" alt="Logo" />
          </div>
      </div>
      <div className="nav-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/community">Community</Link>
        <Link to="/service">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      </div>
    </header>
  );
}
