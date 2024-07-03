import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className='logo-container'>
        <div>
          <img src="/src/assets/SWP-LOGO-COLOR.png" alt="Logo" />
          </div>
        <h1><Link>SkyWork <span>Pro</span></Link></h1>
      </div>
      <div className="nav-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      </div>
    </header>
  );
}
