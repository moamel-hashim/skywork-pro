
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
            <h3>Skywork <span>Pro</span></h3>
            <p>
              Skywork Pro is a premier provider of Unmanned Aerial Systems (UAS) services for critical infrastructure, utility networks, and public safety. Our cross-functional and cross-cultural team includes engineers, technicians, and experienced pilots specializing in the use of Unmanned Aerial Vehicles (UAVs), also known as drones. Our mission is to ensure the safety, security, and integrity of critical infrastructure and the public, thereby enhancing the well-being of our communities.
            </p>
            <div className="button-container">
              <Link to='/contact'>Contact Us</Link>
            </div>
          </div>
          <img src="/images/drone.webp" alt="Drone hero image" className="first-drone"/>
          <img src="/images/d02.webp" alt=""  className="second-drone"/>
        </div>
      </section>
      <section>
        <div className="title">
          <h2>Featured Services</h2>
        </div>
        <div className="cards-container">
          <div className="cards">
            <h3>Critical Infrastructure Services</h3>
            <div>
              <img src="/images/structure-rode.jpg" alt="an image of structures and rode" />
            </div>
            <div>
              <p>We take the safety of our communities seriously.That's why we provide a wide range of innovative and
                reliable solutions, delivered with precision and expertise, to ensure that our critical infrastructure
                remains in continuous working order when it matters most.
              </p>
            </div>
          </div>
          <div className="cards">
            <h3>Public Safety</h3>
            <div>
              <img src="/images/white-hot.jpg" alt="Drone flying by a power pole for inspection" />
            </div>
            <div>
              <p>
                Skywork Pro has developed a comprehensive Public Safety program, offering strategic surveillance
                operations and aerial support for ground responders. Partner with Skywork Pro to protect and serve your community.
              </p>
            </div>
          </div>
          <div className="cards">
            <h3>Electrical Utility Inspection</h3>
            <div>
              <img src="/images/3.jpg" alt="an image of an electric pole" />
            </div>
            <div>
              <p>Specializing in transmission, distribution, and substation inspections, Skywork Pro delivers safe, accurate, and efficient
                assessments using advanced drone technology.
              </p>
            </div>
          </div>
          <div className="cards">
            <h3>LiDAR</h3>
            <div>
              <img src="/images/8.jpg" alt="an image of LiDAR technology" />
            </div>
            <div>
              <p>Skywork Pro delivers high-precision LiDAR data collection and mapping, offering cutting-edge solutions with unmatched accuracy.</p>
            </div>
          </div>
        </div>
          <div className="align-center">
            <Link to="/services" className="button">Learn more</Link>
          </div>
      </section>
      <section>
        <div className="title">
          <h2>Why Choose Skywork Pro?</h2>
        </div>
        <article>
          Skywork Pro prioritizes safety and reliable data delivery through rigorous practices and professional expertise. We go beyond basic compliance by implementing comprehensive safety protocols. Our highly trained and experienced pilots demonstrate exceptional professionalism on every mission. Their disciplined approach is crucial for managing complex and potentially hazardous situations. Partnering with Skywork Pro ensures a commitment to excellence and a safety-first approach in all operations.
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
