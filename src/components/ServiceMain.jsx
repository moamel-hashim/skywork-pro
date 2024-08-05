import './ServiceMain.css';
import {Link} from 'react-router-dom';
export default function ServiceMain() {
  return (
    <main className="service">
      <header>
        <div>
          <h2>What We Offer</h2>
        </div>
        <div>
          <p>
            While never compromising safety, Skywork Pro consistently achieves significant results with strong efficiency. This is facilitated by the utilization of advanced technology and comprehensive analytics. reducing potential expenses and safeguarding our most valuable asset ,our crew. This focus allows us to maintain significant operational output ensuring timely and reliable service for our clients.
          </p>
        </div>
      </header>

      <section>
        <div>
          <h3>Our Services</h3>
          <p>Skywork Pro offers a wide range of specialized services for multiple industries, including but not limited to </p>
          <ul>
            <li>Utility Inspections</li>
            <li>LiDAR Technology</li>
            <li>Mapping Orthomosaics</li>
            <li>3D Models</li>
            <li>Infrared/RGB/Thermal Imaging</li>
            <li>Cinematography / Photography</li>
          </ul>
          <h3>Industries Served</h3>
          <ul>
            <li>Agriculture</li>
            <li>Construction</li>
            <li>Compliance</li>
            <li>Entertainment</li>
            <li>Military</li>
            <li>Oil & Gas</li>
            <li>Public Safety</li>
            <li>Security</li>
            <li>Utilities (Electric, Energy, Gas, Solar, Telecom, Water)</li>
            <li>Wildlife Disaster Relief</li>
          </ul>
          <div>
            <Link to="/contact">contact us</Link>
          </div>
        </div>
        <div>
          <img src="/images/Blog-Drone-Inspection.webp" alt="drones for inspection" />
        </div>
      </section>
      <section>
        <div>
          <h3>Electric Utilities Management</h3>
          <p>Skywork Pro is a leading provider of advanced inspection services for electrical utility networks.
            Our mission is to ensure the safety, security, and integrity of critical infrastructure, protecting and enhancing the safety and security of our communities.
          </p>
          <p>Skywork Pro offers a multitude of services to keep your utility network compliant, manageable, and safe.</p>
          <ul>
            <li>Transmission and Distribution Inspection Services</li>
            <li>PSPS Inspections</li>
            <li>Substation Inspections</li>
            <li>Wildfire Mitigation</li>
            <li>Vegetation Management</li>
            <li>LiDAR / Corona Solutions</li>
            <li>Infrared / RGB / Thermal Imaging</li>
            <li>Disaster Relief</li>
          </ul>
          <div>
            <Link to="/contact">contact us</Link>
          </div>
        </div>
        <div>
          <img src="/images/Drone inspecting a pylon and power lines .jpg" alt="drones for inspection" />
        </div>
      </section>

      <section>
        <div>
          <h3>Management Services</h3>
          <p>We excel in offering comprehensive management services such as;</p>
          <ul>
            <li>Project Analysis & Management</li>
            <li>Vegetation Management</li>
            <li>Magnetometer Survey</li>
            <li>Hydrology & Watershed Analysis</li>
            <li>Erosion Control & Prevention</li>
          </ul>
          <div>
            <Link to="/contact">contact us</Link>
          </div>
        </div>
        <div>
          <img src="/images/0_Va-gv_srB-RhsRWi.jpg" alt="aerial view of vegetation managemen" />
        </div>
      </section>

      <section>
        <div>
          <h3>Public Safety</h3>
          <p>We take pride in keeping the communities that serve us safe by providing these services back to the community.</p>
          <ul>
            <li>Disaster Mitigation & Relief</li>
            <li>Emergency Services</li>
            <li>Search & Rescue</li>
            <li>Security</li>
          </ul>
          <div>
            <Link to="/contact">contact us</Link>
          </div>
        </div>
        <div>
          <img src="/images/dji-drone.jpg" alt="aerial view of vegetation management" />
        </div>
      </section>

      <section>
        <p>Don't see the service you need? <Link to="/contact">Contact us</Link>, and Skywork Pro will tailor a solution to fit your specific requirements.</p>
      </section>

    </main>
  )
}
