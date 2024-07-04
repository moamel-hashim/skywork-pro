
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRecycle} from '@fortawesome/free-solid-svg-icons';
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
            <div>
              <img src="/src/assets/Exo-inc-aerial-inspection-drones.jpg" alt="Drone flying by a power pole for inspection" />
            </div>
            <div>
              <p>Skywork Pro leads in aerial drone inspections, offering precise, detailed, and safe assessments with cutting-edge technology. Trust Skywork Pro for top-quality, efficient results.</p>
            </div>
            <div>
            <Link to="/service" className="button">Learn more</Link>
            </div>
          </div>
          <div className="cards">
            <p>Infrastructure Services</p>
            <div>
              <img src="/src/assets/structure-rode.jpg" alt="an image of structures and rode" />
            </div>
            <div>
              <p>Skywork Pro excels in infrastructure services, delivering reliable, innovative solutions with precision and expertise. Trust Skywork Pro for top-tier infrastructure support and excellence.</p>
            </div>
            <div>
              <Link to="/service" className="button">Learn more</Link>
            </div>
          </div>
          <div className="cards">
            <p>Transmission & distribution pole inspections</p>
            <div>
              <img src="/src/assets/electric-pole.jpg" alt="an image of an electric pole" />
            </div>
            <div>
              <p>Skywork Pro specializes in transmission and distribution pole inspections, providing accurate, efficient assessments using advanced drone technology.
                Rely on Skywork Pro for safe and reliable pole inspections.</p>
            </div>
            <div>
              <Link to="/service" className="button">Learn more</Link>
            </div>
          </div>
          <div className="cards">
            <p>LiDAR</p>
            <div>
              <img src="/src/assets/LiDAR.jpg" alt="an image of LiDAR technology" />
            </div>
            <div>
              <p>Skywork Pro offers superior LiDAR services, delivering high-precision mapping and data collection.
                Count on Skywork Pro for cutting-edge LiDAR solutions and unmatched accuracy.</p>
            </div>
            <div>
              <Link to="/service" className="button">Learn more</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="title">
          <h2>Why Chose Skywork pro?</h2>
        </div>
        <article>
          Choose Skywork Pro for unparalleled expertise in drone technology and aerial inspections. Our state-of-the-art equipment and experienced team ensure precise, efficient, and safe assessments for a wide range of applications, from infrastructure and transmission poles to LiDAR mapping. Committed to innovation and quality,
           Skywork Pro delivers reliable, detailed results that enhance operational efficiency and safety. Trust Skywork Pro for exceptional service and industry-leading solutions tailored to meet your specific needs.
        </article>
        <div className="cards-container">
          <div className="cards">
            <h3>Asset Lifecycle Management</h3>
            <div>
              <FontAwesomeIcon icon={faRecycle}/>
            </div>
          </div>
          <div className="cards">
            <h3>Visualization & Analytics</h3>
          </div>
          <div className="cards">
            <h3>Preventative Asset Maintenance</h3>
          </div>
        </div>
      </section>
    </main>
  )
}
