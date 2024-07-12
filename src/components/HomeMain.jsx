
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
          <img src="/images/2.jpg" alt="Drone hero image" />
        </div>
      </section>
      <section>
        <div className="title">
          <h2>Featured Services</h2>
        </div>
        <div className="cards-container">
          <div className="cards">
            <h3>Aerial Services</h3>
            <div>
              <img src="/images/Exo-inc-aerial-inspection-drones.jpg" alt="Drone flying by a power pole for inspection" />
            </div>
            <div>
              <p>Skywork Pro leads in aerial drone inspections, offering precise, detailed, and safe assessments with cutting-edge technology. Trust Skywork Pro for top-quality, efficient results.</p>
            </div>
            <div className="aerial-button">
              <Link to="/service" className="button">Learn more</Link>
            </div>
          </div>
          <div className="cards">
            <h3>Infrastructure Services</h3>
            <div>
              <img src="/images/structure-rode.jpg" alt="an image of structures and rode" />
            </div>
            <div>
              <p>Skywork Pro excels in infrastructure services, delivering reliable, innovative solutions with precision and expertise. Trust Skywork Pro for top-tier infrastructure support and excellence.</p>
            </div>
            <div>
              <Link to="/service" className="button">Learn more</Link>
            </div>
          </div>
          <div className="cards">
            <h3>Transmission & Distribution Pole Inspections</h3>
            <div>
              <img src="/images/3.jpg" alt="an image of an electric pole" />
            </div>
            <div>
              <p>Skywork Pro specializes in transmission and distribution pole inspections, providing accurate, efficient assessments using advanced drone technology.
                Rely on Skywork Pro for safe and reliable pole inspections.</p>
            </div>
            <div className="custom-button">
              <Link to="/service" className="button">Learn more</Link>
            </div>
          </div>
          <div className="cards">
            <h3>LiDAR</h3>
            <div>
              <img src="/images/8.jpg" alt="an image of LiDAR technology" />
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
          Experience unparalleled expertise in drone technology and aerial inspections with Skywork Pro. Our state-of-the-art
          equipment and experienced team deliver precise, efficient, and safe assessments for a wide range of applications,
          including infrastructure, transmission, distribution, substations, LiDAR data and many more application. With a commitment
          to innovation and quality, Skywork Pro provides reliable, detailed results that enhance operational efficiency and safety.
          Trust Skywork Pro for exceptional service and industry-leading solutions tailored to your specific needs.
        </article>
        <div className="cards-container">
          <div className="cards">
            <div>
              <FontAwesomeIcon icon={faRecycle} />
            </div>
            <h3>Comprehensive Asset Lifecycle Oversight</h3>
            <div>
              <p>Maximize the efficiency and cost-effectiveness of your assets throughout their lifecycle with data captured by Skywork Pro technology.</p>
            </div>
          </div>
          <div className="cards">
            <div>
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Data Visualization & Insights</h3>
            <div>
              <p>Transform complex data into actionable insights with Skywork Pro's top-tier Visualizations and Analytics. Our advanced drone technology offers clear, accurate Visualization and comprehensive analytics.</p>
            </div>
          </div>
          <div className="cards">
            <div>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <h3> Asset Care</h3>
            <div>
              <p>Optimize your assets beyond routine inspection schedules. Improve reliability, safety, and efficiency by proactively minimizing downtime.</p>
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
              <p>Identify and eliminate potential risks before they lead to unplanned costs or disasters.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Reduce Operational Costs & Save Time</h3>
            <div>
              <p>Minimize overspending from asset downtime and high repair quickly.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Mitigate Regulatory Compliance Burdens</h3>
            <div>
              <p>Quick deliverables and comprehensive solutions for better regulatory management</p>
            </div>
          </div>
          <div className="cards">
            <h3>Automate Complex Processes</h3>
            <div>
              <p>Utilize data-driven methods to drive optimal utility performance and efficient operations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
