
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faChartLine, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './HomeMain.css';
import { Link } from 'react-router-dom';
export default function HomeMain() {
  return (
    <main>
      <section>
        <div className="hero-img-container">
          <div className="hero-text">
            <h3>Pro-Community</h3>
            <p>
              Skywork Pro is a leading provider of unmanned aerial systems (UAS)
              services for infrastructure/utility networks and public safety. Our cross-cultural crew
              consists of safety driven experienced professionals specialized in using unmanned aerial
              vehicles (UAVs) also known as drones. Our mission is to ensure the safety, security, and integrity
              of critical infrastructure and the public, thereby enhancing the safety and security of our communities.
            </p>
            <div className="button-container">
              <Link to='/contact'>Contact Us</Link>
            </div>
          </div>
          <img src="/images/hero-gurd-drone.jpg" alt="Drone hero image" className="first-drone"/>
          <img src="/images/d02.webp" alt=""  className="second-drone"/>
        </div>
      </section>
      <section>
        <div className="title">
          <h2>Featured UAV Services</h2>
        </div>
        <div className="cards-container">
          <div className="cards">
            <h3>Critical Infrastructure Services</h3>
            <div>
              <img src="/images/structure-rode.jpg" alt="an image of structures and rode" />
            </div>
            <div>
              <p>Excel in infrastructure services with Skywork Pro's reliable. innovative solutions delivered with precision and expertise.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Public Safety</h3>
            <div>
              <img src="/images/white-hot.jpg" alt="Drone flying by a power pole for inspection" />
            </div>
            <div>
              <p>Skywork Pro has developed a program for Public Safety offering strategic surveillance operations and air support for ground
                responders. Protect and serve the community with Skywork Pro.
              </p>
            </div>
          </div>
          <div className="cards">
            <h3>Transmission & Distribution Pole Inspections</h3>
            <div>
              <img src="/images/3.jpg" alt="an image of an electric pole" />
            </div>
            <div>
              <p>Specializing in transmission and distribution pole inspections, Skywork Pro provides safe, accurate, and efficient assessments using advanced drone technology.</p>
            </div>
          </div>
          <div className="cards">
            <h3>LiDAR</h3>
            <div>
              <img src="/images/8.jpg" alt="an image of LiDAR technology" />
            </div>
            <div>
              <p>Offering LiDAR services. Skywork Pro delivers high-precision mapping and data collection. We provide cutting-edge LiDAR solutions and unmatched accuracy.</p>
            </div>
          </div>
        </div>
          <div className="align-center">
            <Link to="/services" className="button">Learn more</Link>
          </div>
      </section>
      <section>
        <div className="title">
          <h2>Why Chose Skywork Pro?</h2>
        </div>
        <div className="triangle">
          <h3>&#9651;</h3>
        </div>
        <article>
          While never compromising safety, Skywork Pro consistently achieves significant results with strong efficiency. This is facilitated by the utilization of advanced technology and comprehensive analytics. reducing potential expenses and safeguarding our most valuable asset ,our crew. This focus allows us to maintain significant operational output ensuring timely and reliable service for our clients.
        </article>
      </section>
      <section>
        <div className="section-header">
          <h2>Benefits</h2>
        </div>
        <div className="cards-container">
          <div className="cards">
            <h3>Foresight</h3>
            <div>
              <p>Proactively detect and mitigate potential risks to prevent unplanned expenditures or catastrophic events.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Simplify</h3>
            <div>
              <p>Reduce excess expenditures resulting from asset downtime and elevated repair costs in a timely manner.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Facilitate</h3>
            <div>
              <p>Expedited solutions for compliance and efficient regulatory management.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Automate</h3>
            <div>
              <p>Apply data-driven methods to enhance utility performance and improve operational efficiency.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
