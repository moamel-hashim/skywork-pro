import {Link} from 'react-router-dom';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';


export default function Footer() {
  return(
    <footer>
      <div className="footer">
      <div className='logo-container'>
        <div>
          <img src="/src/assets/SWP-LOGO-COLOR.png" alt="Logo" />
        </div>
        <h1><Link to="/">SkyWork <span>Pro</span></Link></h1>
      </div>
      <div className="footer-container">
        <div className="menu">
          <h3>Menu</h3>
          <Link to="/">Home</Link>
          <Link to="/community">Community</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>Email: info@skywork.pro</p>
        </div>
        <div className="social">
          <h3>Follow</h3>
          <Link to=""><FontAwesomeIcon icon={faLinkedin}/></Link>
        </div>
      </div>
      </div>
    <div className="copyright">
      <p><i> &copy; all rights are reserved by Skywork pro</i></p>
    </div>
    </footer>
  )
}
