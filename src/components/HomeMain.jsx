
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
            <h3>Transmission & Distribution Inspections</h3>
            <p>Skywork Pro is a leading provider of advance inspection service for transmission and distribution networks.
              Our mission is to ensure the safety, security, and integrity of critical infrastructure, protecting and enhancing
              the safety and security of our communities.
            </p>
            <div className="button-container">
              <Link to='/contact'>Contact Us</Link>
            </div>
          </div>
          <img src="/src/assets/images/QZJcI1mFTgGa2HpMhhYj-383580018.jpg" alt="Drone hero image" />
        </div>
      </section>
      <section>
        <div className="title">
          <h2>Featured Services</h2>
        </div>
        <div className="cards-container">
          <div className="cards">
            <h3>Areal Services</h3>
            <div>
              <img src="/src/assets/images/Exo-inc-aerial-inspection-drones.jpg" alt="Drone flying by a power pole for inspection" />
            </div>
            <div>
              <p>Skywork Pro leads in aerial drone inspections, offering precise, detailed, and safe assessments with cutting-edge technology. Trust Skywork Pro for top-quality, efficient results.</p>
            </div>
            <div>
              <Link to="/service" className="button">Learn more</Link>
            </div>
          </div>
          <div className="cards">
            <h3>Infrastructure Services</h3>
            <div>
              <img src="/src/assets/images/structure-rode.jpg" alt="an image of structures and rode" />
            </div>
            <div>
              <p>Skywork Pro excels in infrastructure services, delivering reliable, innovative solutions with precision and expertise. Trust Skywork Pro for top-tier infrastructure support and excellence.</p>
            </div>
            <div>
              <Link to="/service" className="button">Learn more</Link>
            </div>
          </div>
          <div className="cards">
            <h3>Transmission & distribution pole inspections</h3>
            <div>
              <img src="/src/assets/images/electric-pole.jpg" alt="an image of an electric pole" />
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
            <h3>LiDAR</h3>
            <div>
              <img src="/src/assets/images/LiDAR.jpg" alt="an image of LiDAR technology" />
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
            <div>
              <FontAwesomeIcon icon={faRecycle} />
            </div>
            <h3>Lifecycle Management</h3>
            <div>
              <p>Skywork Pro's technology captures data to optimize the efficiency and cost-effectiveness of assets at every stage of their lifecycle, ensuring maximum utility ROI.</p>
            </div>
          </div>
          <div className="cards">
            <div>
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Visualization & Analytics</h3>
            <div>
              <p>Skywork Pro delivers top-tier visualization and analytics, turning complex data into actionable insights with advanced drone technology. Enjoy clear, accurate visualizations and comprehensive analytics.</p>
            </div>
          </div>
          <div className="cards">
            <div>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <h3> Asset Maintenance</h3>
            <div>
              <p>Go beyond routine inspection schedules to optimize your assets. Improve your grid's reliability, safety, and efficiency by proactively minimizing downtime.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-header">
          <h2>Benefits</h2>
        </div>
        <div className="cards-container">
          <div className="cards">
            <h3>Detect Potential Risk in Advance</h3>
            <div>
              <p>Identify and eliminate potential risks before they cause unplanned costs or disasters.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Reduce Operational Costs & Save Time</h3>
            <div>
              <p>Minimize overspending caused by asset downtime and high repair costs in a fraction of the time.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Mitigate Regulatory Compliance Burdens</h3>
            <div>
              <p>Comprehensive solutions with quick deliverables enable better management of regulatory expectations.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Automate Complex Processes</h3>
            <div>
              <p>Embrace data-driven methods to drive optimal utility performance and efficient operations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
