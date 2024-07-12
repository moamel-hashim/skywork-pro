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
            At Skywork Pro, we are dedicated to enhancing the performance and longevity of your utility assets through insightful data. Our specialized services focus on proactive analytics and responsive insights, ensuring optimal conditions and uninterrupted operations. Leveraging cutting-edge tools and technology, Skywork Pro provides precise and safe infrastructure inspections, enabling timely maintenance and early risk detection. Combining intelligence-driven technology with our team's expertise, Aethon delivers innovative, cost-effective solutions tailored to your needs.
          </p>
        </div>
      </header>

      <section>
        <div>
          <h3>Our Services</h3>
          <p>Skywork Pro offers a wide range of specialized services, including</p>
          <ul>
            <li>Inspections</li>
            <li>LiDAR Technology</li>
            <li>Mapping Orthomosaics</li>
            <li>3D Models</li>
            <li>Infrared/RGB/Thermal Imaging</li>
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
          <h3>Power Grid</h3>
          <p>Skywork Pro offers an excellent inspections and services using cutting edge technology</p>
          <ul>
            <li>transmission and distribution inspection services</li>
            <li>LiDAR / Corona solutions</li>
            <li>PSP inspections</li>
            <li>Substation inspections</li>
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
          <h3>Imaging Solutions</h3>
          <p>Our advanced imaging services provide</p>
          <ul>
            <li>Disaster Relief</li>
            <li>Wildfire Mitigation</li>
            <li>PSPS Services</li>
            <li>Security</li>
            <li>Project Analysis</li>
          </ul>
          <div>
            <Link>contact us</Link>
          </div>
        </div>
        <div>
          <img src="/images/ic_1707343041_1600x_false.jpg" alt="drone imaging solutions" />
        </div>
      </section>

      <section>
        <div>
          <h3>Management Services</h3>
          <p>We excel in offering comprehensive management services such as</p>
          <ul>
            <li>Vegetation Management</li>
            <li>Magnetometer Surveys</li>
            <li>Hydrology & Watershed Analysis</li>
          </ul>
          <div>
            <Link>contact us</Link>
          </div>
        </div>
        <div>
          <img src="/images/0_Va-gv_srB-RhsRWi.jpg" alt="aerial view of vegetation management" />
        </div>
      </section>

      <section>
        <div>
          <h3>Erosion Control</h3>
          <p>Our erosion control services include</p>
          <ul>
            <li>Photography</li>
            <li>Cinematography</li>
          </ul>
          <div>
            <Link>contact us</Link>
          </div>
        </div>
        <div>
          <img src="/images/DJI_0246-scaled.webp" alt="drone image of erosion control" />
        </div>
      </section>

      <section>
        <p>Don't see the service you need? <Link to="/contact">Contact us</Link>, and Skywork Pro will tailor a solution to fit your specific requirements.</p>
      </section>

    </main>
  )
}
