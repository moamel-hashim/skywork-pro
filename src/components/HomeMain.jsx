import './HomeMain.css';
import {Link} from 'react-router-dom';
export default function HomeMain() {
  return (
    <main>
      <section>
        <div className="hero-img-container">
          <div className="hero-text">
            <h3>Transmission & Distribution Inspections</h3>
            <p>Skywork Pro is a leading provider of advance inspection service for transmission and distribution networks.
              Our mission is to ensure the safety, security, and integrity of critical infrastructure, protecting and enhancing
              the safety and security of our communities.
            </p>
            <div className="button-container">
            <Link to='/contact'>Contact Us</Link>
            </div>
          </div>
          <img src="/src/assets/QZJcI1mFTgGa2HpMhhYj-383580018.jpg" alt="Drone hero image" />
        </div>
      </section>
      <section>
        <div className="title">
        <h2>Featured Services</h2>
        </div>
        <div className="cards-container">
          <div className="cards">
            <p>Areal Services</p>
          </div>
          <div className="cards">
            <p>Infrastructure Services</p>
          </div>
          <div className="cards">
            <p>Transmission & distribution pole inspections</p>
          </div>
        </div>
      </section>
    </main>
  )
}
