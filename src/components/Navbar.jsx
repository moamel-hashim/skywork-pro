import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className='logo-container'>
        <div>
          <img src="/images/SWP HORIZONTAL.png" alt="Logo" />
        </div>
      </div>
      <div className="nav-container">
        <div className={`${isMenuOpen === false ? 'hamburger-menu' : 'hamburger-menu side-menu-style'}`}>
          <button onClick={toggleMenu}>
            {isMenuOpen === false ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faTimes}/>}
          </button>
          {isMenuOpen && (
            <div className="side-menu">
              <nav className="not-hidden side-menu-nav">
                <Link to="/" onClick={toggleMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/community" onClick={toggleMenu} className={location.pathname === '/community' ? 'active' : ''}>Community</Link>
                <Link to="/services" onClick={toggleMenu} className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                <Link to="/contact" onClick={toggleMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
              </nav>
            </div>
          )}
        </div>
        <nav className="hidden">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>Community</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
