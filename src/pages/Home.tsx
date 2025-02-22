import '../Home.css';
import aaupHeader from '../assets/aaup-header.jpg'; // image from https://www.peoplesworld.org/wp-content/uploads/2022/03/aaup960.jpg
import aaupHeaderTopCropped1 from '../assets/aaup-header-top-cropped1.jpg';
import aaupHeaderTopCropped2 from '../assets/aaup-header-top-cropped2.jpg';
import aaupHeaderTopCropped3 from '../assets/aaup-header-top-cropped3.jpg';
import fist from '../assets/aaup-fist.png'; // image adapted from https://www.newschoolfreepress.com/wp-content/uploads/2024/03/aaup-1536x864.png
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [headerImageLoaded, setHeaderImageLoaded] = useState(false);
  useEffect(() => {
    if (headerImageLoaded) {
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
    }
  }, [headerImageLoaded]);
  return (
    <main id="homeSection">
      <picture
        onLoad={() => setHeaderImageLoaded(true)}
        onError={() => setHeaderImageLoaded(true)}
      >
        <source
          srcSet={aaupHeader}
          id="topHeader"
          media="(max-aspect-ratio: 1.25)"
        />
        <source
          srcSet={aaupHeaderTopCropped1}
          id="topHeader"
          media="(max-aspect-ratio: 1.5)"
        />
        <source
          srcSet={aaupHeaderTopCropped2}
          id="topHeader"
          media="(max-aspect-ratio: 1.75)"
        />
        <source srcSet={aaupHeaderTopCropped3} id="topHeader" />
        <img src={aaupHeader} id="topHeader" alt="AAUP National crowd banner" />
      </picture>
      <h1>
        Join AAUP: Your Advocate for Academic Freedom and Professional Rights
      </h1>
      <h2>Protect Your Career, Strengthen Your Voice.</h2>
      <Link to="join">
        <button className="btn btn-primary">Join Now</button>
        <p>
          Please join directly through Molloy AAUP to ensure that the chapter
          receives your local dues.
        </p>
      </Link>
      <div>
        <div className="section-item-content fade-in">
          <h3>
            AAUP President: DOE's Office of Civil Rights Has Declared War on
            American Civil Rights in Education
          </h3>
          <p>
            In a letter released on{' '}
            <time dateTime="2025-02-14">February 14, 2025</time>, the acting
            assistant secretary for the US Department of Education’s Office of
            Civil Rights threatened to annihilate sixty years of advancements in
            equal opportunity by eliminating all federal funding for schools
            that support and celebrate students from diverse backgrounds. Read
            more on the National AAUP web site here:{' '}
            <a href="https://www.aaup.org/news/aaup-president-eds-office-civil-rights-has-declared-war-american-civil-rights-education">
              https://www.aaup.org/news/aaup-president-eds-office-civil-rights-has-declared-war-american-civil-rights-education
            </a>
            .
          </p>
        </div>
        <div className="section-item-content fade-in">
          <h3>AAUP Joins Lawsuit to Block Trump's Unlawful DEI Orders</h3>
          <p>
            On the evening of{' '}
            <time dateTime="2025-02-03">February 3, 2025</time>, the AAUP, along
            with the National Association of Diversity Officers in Higher
            Education and other partners filed a lawsuit to block Trump's
            unlawful and unconstitutional DEI executive orders, which threaten
            academic freedom and access to higher education.
          </p>
          <p>
            The lawsuit, which can be read in full{' '}
            <a
              href="https://storage.courtlistener.com/recap/gov.uscourts.mdd.575287/gov.uscourts.mdd.575287.1.0.pdf"
              target="_blank"
            >
              here
            </a>
            , argues that Trump's orders exceed his legal authority, are overly
            vague, and fail to define such terms as "DEI," "equity," and
            "illegal DEIA." Without any definitive criteria or information, the
            orders open academic institutions to the risk of lawsuits for
            policies that promote diversity, equity, and inclusion.
          </p>
          <p>
            The AAUP has long advocated for diversity in higher education,
            including a diverse faculty and student body. The Association's
            recent statement{' '}
            <span style={{ fontStyle: 'italic' }}>
              <a
                href="https://www.aaup.org/report/eliminating-discrimination-and-achieving-equality-higher-education"
                target="_blank"
              >
                On Eliminating Discrimination and Achieving Equality in Higher
                Education
              </a>
            </span>{' '}
            focuses on diversity in faculty employment within an integrated
            understanding of how to move toward the broader goal of inclusion
            and equality in higher education.
          </p>
        </div>
        <div className="section-item-content fade-in">
          <h3>
            Statement from the National Office of AAUP's Against Anticipatory
            Obedience
          </h3>
          <p>
            AAUP is working to prevent "anticipatory obedience" to political
            interference in higher education, on our campuses and in our states.
            A new joint statement from the AAUP’s Committee A on Academic
            Freedom and Tenure and Committee on College and University
            Governance discusses how the Trump administration and many state
            governments appear poised to accelerate attacks on academic freedom,
            shared governance, and higher education as a public good. See the{' '}
            <a
              href="https://www.aaup.org/report/against-anticipatory-obedience"
              target="_blank"
            >
              statement on the Molloy AAUP web site
            </a>{' '}
            or{' '}
            <Link to="assets/Against_Anticipatory_Obedience.pdf">
              download the PDF
            </Link>
            .
          </p>
        </div>
        <div className="section-item-content fade-in">
          <h3>
            Examining Employer Compensation Practices that Contribute to Pay
            Inequities
          </h3>
          <p>
            AAUP recently conducted a webinar on Examining Employer Compensation
            Practices that Contribute to Pay Inequities. The workshop revealed
            both the persistent challenges and promising solutions in our
            collective progress toward workplace equity.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xSPG-oM4cks?si=gihPuQPW75TChjPk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <ol style={{ marginTop: '30px' }}>
          <li className="section-item fade-in">
            <div className="section-item-content">
              <h3>Why Join?</h3>
              <ul>
                <li>
                  In this day of eroding faculty governance and school financial
                  challenges, the jobs of both tenured and untenured professors
                  are at{' '}
                  <a
                    href="https://mcquad.org/2024/01/24/tenured-professors-fired-in-sweeping-layoffs/"
                    target="_blank"
                  >
                    significant risk
                  </a>
                  . We{' '}
                  <Link to="/communications">
                    protect both tenured and untenured faculty members from
                    unjust dismissal
                  </Link>
                  , offering assistance with legal services as required.
                </li>
                <li>
                  We work to <Link to="/blog">address fair compensation</Link>{' '}
                  when benefits are cut or raises are non-existent or low. AAUP
                  is now{' '}
                  <a
                    href="https://www.aaup.org/about/aaupaft-affiliation"
                    target="_blank"
                  >
                    affiliated with the powerful American Federation of Teachers
                    Union
                  </a>
                  .
                </li>
                <li>
                  {/*From ensuring faculty representation on search committees to being able to teach how you want in the classroom, AAUP makes sure we all have voices and*/}{' '}
                  AAUP works to ensure faculty governance. When important
                  decisions have been made such as{' '}
                  <Link to="/blog">selecting a University President</Link>, AAUP
                  was there to make sure faculty had adequate representation.
                </li>
                <li>
                  AAUP pushes to preserve academic freedom, ensuring that its
                  members are able to teach and research what and how they want.
                  When students, parents, or administrators object to what a
                  professor teaches within the scope of their area of expertise,
                  you can rest assured that AAUP is there to back up the faculty
                  member.
                </li>
                <li>
                  For about the price of a coffee per week, AAUP offers its
                  members{' '}
                  <Link to="/professional-insurance">
                    Professional Liability Insurance
                  </Link>
                  , which can cover a member for up to $1 million for legal
                  defense and settlement costs related to your professional
                  duties as a teacher or researcher.
                </li>
                <li>
                  Increasing our AAUP Chapter's membership will enhance our
                  ability to help you and your fellow faculty members when you
                  have a problem and strengthen our ability to ensure adequate
                  compensation. And you can do this for less than a dollar a
                  day!
                </li>
                <li>
                  Still not ready to join? Feel free to{' '}
                  <Link to="/contact">contact us</Link> with any questions or
                  concerns you may have and we'll happily answer them! Or if
                  you're ready: <br />{' '}
                  <Link to="join">
                    <button className="btn btn-primary">Join Now</button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="section-item-image">
              <img src={fist} alt="Molloy AAUP fist" />
            </div>
          </li>
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
                  academic environment, which include{' '}
                  <Link to="/communications">
                    protecting untenured and tenured faculty members
                  </Link>
                  .
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
