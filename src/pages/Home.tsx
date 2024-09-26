import '../Home.css';
import aaupHeader from '../assets/aaup-header.jpg'; // image from https://www.peoplesworld.org/wp-content/uploads/2022/03/aaup960.jpg
import fist from '../assets/aaup-fist.png'; // image adapted from https://www.newschoolfreepress.com/wp-content/uploads/2024/03/aaup-1536x864.png
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const images = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    });

    images.forEach((image) => observer.observe(image));
  }, []);
  return (
    <main id="homeSection">
      <img src={aaupHeader} id="topHeader" />
      <h1>
        Join AAUP: Your Advocate for Academic Freedom and Professional Rights
      </h1>
      <h2>Protect Your Career, Strengthen Your Voice.</h2>
      <Link to="join">
        <button className="btn btn-primary">Join Now</button>
      </Link>
      <div>
        <ol style={{ marginTop: '30px' }}>
          <li className="section-item fade-in">
            <div className="section-item-content">
              <h3>Protect Your Rights</h3>
              <ul>
                <li>
                  Uphold Your Principles: AAUP champions academic freedom and
                  shared governance, ensuring that your voice is heard and
                  respected.
                </li>
                <li>
                  Watchdog for Fairness: We monitor your institution to identify
                  and address issues that may compromise your rights or the
                  academic environment.
                </li>
              </ul>
            </div>
            <div className="section-item-image">
              <img src={fist} alt="Molloy AAUP fist" />
            </div>
          </li>
          <li className="section-item fade-in">
            <div className="section-item-content">
              <h3>Connect with Your Community</h3>
              <ul>
                <li>
                  Local and National Support: Join a network of dedicated
                  faculty members who share your commitment to academic
                  excellence and professional standards.
                </li>
                <li>
                  Share Experiences and Resources: Connect with colleagues
                  facing similar challenges and learn from their experiences.
                </li>
              </ul>
            </div>
            <div className="section-item-image">
              <img src={fist} alt="Molloy AAUP fist" />
            </div>
          </li>

          <li className="section-item fade-in">
            <div className="section-item-content">
              <h3>Advocate for Your Profession</h3>
              <ul>
                <li>
                  Influence Policy: AAUP works with policymakers to shape
                  policies that support faculty rights and advance higher
                  education.
                </li>
                <li>
                  Amplify Your Voice: Join our advocacy efforts to raise
                  awareness of important issues affecting faculty and students.
                </li>
              </ul>
            </div>
            <div className="section-item-image">
              <img src={fist} alt="Molloy AAUP fist" />
            </div>
          </li>

          <li className="section-item fade-in">
            <div className="section-item-content">
              <h3>Access Essential Resources</h3>
              <ul>
                <li>
                  Legal Guidance: Benefit from our legal resources and expert
                  advice on issues such as tenure, promotion, and workplace
                  disputes.
                </li>
                <li>
                  Professional Development: Access workshops, webinars, and
                  other opportunities to enhance your skills and advance your
                  career.
                </li>
              </ul>
            </div>
            <div className="section-item-image">
              <img src={fist} alt="Molloy AAUP fist" />
            </div>
          </li>

          <li className="section-item fade-in">
            <div className="section-item-content">
              <h3>Stand Up for What Matters</h3>
              <ul>
                <li>
                  Protect Your Classroom: AAUP is committed to defending your
                  right to teach without fear of censorship or interference.
                </li>
                <li>
                  Ensure Academic Integrity: Join us in upholding the highest
                  standards of academic integrity and ethical conduct.
                </li>
              </ul>
            </div>
            <div className="section-item-image">
              <img src={fist} alt="Molloy AAUP fist" />
            </div>
          </li>
        </ol>
      </div>
    </main>
  );
}
