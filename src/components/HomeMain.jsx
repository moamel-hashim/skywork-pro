
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
            <h3>Pro Community</h3>
            <p>
              Skywork Pro is a premier UAS (unmanned aerial systems) comprehensive service provider for utility networks and public safety.
               Our team is made of seasoned veterans specialized in the use of UAV's (unmanned aerial vehicles).
               Our mission is to ensure the safety, security, and integrity of critical infrastructure and the public, enhancing the safety and security of our communities.
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
            <h3>Aerial Services</h3>
            <div>
              <img src="/images/Exo-inc-aerial-inspection-drones.jpg" alt="Drone flying by a power pole for inspection" />
            </div>
            <div>
              <p>Leading in aerial drone inspections, Skywork Pro offers precise, detailed, and safe assessments with cutting-edge technology.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Infrastructure Services</h3>
            <div>
              <img src="/images/structure-rode.jpg" alt="an image of structures and rode" />
            </div>
            <div>
              <p>Excel in infrastructure services with Skywork Pro's reliable. innovative solutions delivered with precision and expertise.</p>
            </div>
          </div>
          <div className="cards">
            <h3>Transmission & Distribution Pole Inspections</h3>
            <div>
              <img src="/images/3.jpg" alt="an image of an electric pole" />
            </div>
            <div>
              <p>Specializing in transmission and distribution pole inspections, Skywork Pro provides accurate, efficient assessments using advanced drone technology.</p>
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
        <article>
          Experience unparalleled expertise in drone technology, and aerial inspections with Skywork Pro. Our state-of-the-art
          equipment and experienced team deliver efficient, precise, and safe assessments for a wide range of applications,
          including infrastructure, transmission, distribution, substations, LiDAR data and many more applications. With a commitment
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
            <h5>Detect Potential Risk in Advance</h5>
            <div>
              <p>Identify and eliminate potential risks before they lead to unplanned costs or disasters.</p>
            </div>
          </div>
          <div className="cards">
            <h5>Reduce Operational Costs & Save Time</h5>
            <div>
              <p>Minimize overspending from asset downtime and high repair cost quickly.</p>
            </div>
          </div>
          <div className="cards">
            <h5>Mitigate Regulatory Compliance Burdens</h5>
            <div>
              <p>Quick deliverables and comprehensive solutions for compliance and effective regulatory management.</p>
            </div>
          </div>
          <div className="cards">
            <h5>Automate Complex Processes</h5>
            <div>
              <p>Utilize data-driven methods to drive optimal utility performance and efficient operations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
