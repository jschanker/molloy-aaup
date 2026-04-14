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
          Virtual AAUP Meeting{' '}
          <time dateTime="2026-05-06T12:00">
            Wednesday, May 6th at 12:00pm 
          </time>{' '}
          <p>Zoom link to follow.</p>
          <h3>
            Slides from the{' '}
            <time dateTime="2025-10-06T15:30">October 6th </time>Meeting:{' '}
            <Link to="assets/AAUP_October_6th_2025_Meeting.pdf" target="_blank">
              download the PDF
            </Link>
          </h3>
          <p>Lunch will be served, and all faculty are welcome.</p>
        </div>
        <div className="section-item-content fade-in">
          <h3>AAUP Analysis and Feedback of Molloy's Faculty Handbook</h3>
          <p>
            On <time dateTime="2025-07-11">July 11th, 2025</time>, the National
            Office of the AAUP provided an analysis and feedback of our faculty
            handbook. See{' '}
            <Link to="/faculty-handbook">
              Analysis of Molloy Faculty Handbook
            </Link>{' '}
            under Faculty Resources to view the response as a PDF.
          </p>
        </div>
        <div className="section-item-content fade-in">
          <h3>Challenges to Unionization</h3>
          <h4>
            Loyola Marymount abruptly rescinds recognition of faculty union,
            claiming religious exemption
          </h4>
          <blockquote cite="https://www.latimes.com/business/story/2025-09-18/loyola-marymount-university-abruptly-stops-bargaining-with-faculty-union-claiming-religious-exemption">
            <ul>
              <li>
                Loyola Marymount University abruptly withdrew recognition of its
                faculty union after 10 months of negotiations, citing
                constitutional religious exemptions.
              </li>
              <li>
                The decision affects nearly 400 part-time and full-time
                educators and has sparked protests and allegations of
                union-busting.
              </li>
            </ul>
          </blockquote>
          <p>
            Read more at{' '}
            <a href="https://www.latimes.com/business/story/2025-09-18/loyola-marymount-university-abruptly-stops-bargaining-with-faculty-union-claiming-religious-exemption">
              https://www.latimes.com/business/story/2025-09-18/loyola-marymount-university-abruptly-stops-bargaining-with-faculty-union-claiming-religious-exemption
            </a>
          </p>
          <h4>
            Understanding the possibilities for and the barriers to unionization
            at private colleges and universities.
          </h4>
          <blockquote cite="https://www.latimes.com/business/story/2025-09-18/loyola-marymount-university-abruptly-stops-bargaining-with-faculty-union-claiming-religious-exemption">
            <p>
              It has been just shy of forty-five years since the US Supreme
              Court issued its 1980 decision in NLRB v. Yeshiva University,
              holding that most tenure-track and tenured faculty members at
              private colleges and universities are “managerial
              employees”—a category excluded from coverage and protection
              under the National Labor Relations Act (NLRA). As a result of that
              judi­cial decision, faculty unionization in private colleges and
              universi­ties ground virtually to a halt.
            </p>
          </blockquote>
          <p>
            Read more at{' '}
            <a href="https://www.aaup.org/academe/issues/fall-2024/faculty-unionization-and-continuing-contradiction-yeshiva">
              https://www.aaup.org/academe/issues/fall-2024/faculty-unionization-and-continuing-contradiction-yeshiva
            </a>
          </p>
          <h4>Student Unionization Efforts Stall Under Trump Administration</h4>
          <blockquote cite="https://www.bestcolleges.com/news/student-unionization-efforts-stall-under-trump-administration/">
            <p>
              After changes at the National Labor Relations Board, student
              groups at private colleges and universities are withdrawing
              petitions to unionize.
            </p>
          </blockquote>
          <p>
            Read more at{' '}
            <a href="https://www.bestcolleges.com/news/student-unionization-efforts-stall-under-trump-administration/">
              https://www.bestcolleges.com/news/student-unionization-efforts-stall-under-trump-administration/
            </a>
          </p>
        </div>
        <div className="section-item-content fade-in">
          <h3>Past Events: Learn How to Organize Your Campus</h3>
          <blockquote cite="https://www.organizeeverycampus.org/">
            <p>
              Organize Every Campus is a campaign to grow AAUP chapters and
              locals, develop rank-and-file leadership, and build power for the
              movement to make higher education a public good.Our power comes in
              numbers and in our ability to act collectively.
            </p>
            <p>
              Through Organize Every Campus, you will connect with faculty
              leaders and organizing staff who will share skills and experiences
              having effective one-on-one conversations and making strategic
              plans that move your coworkers to action in the workplace and the
              community.
            </p>
            <p>
              You will learn from the organizing successes and challenges faced
              by faculty across the country, as we fight together on issues
              including budget austerity, political attacks on academic freedom,
              student loan debt, and the jobs crisis in higher education.
            </p>
          </blockquote>
          <p>
            Read more at{' '}
            <a href="https://www.organizeeverycampus.org/">
              https://www.organizeeverycampus.org/
            </a>
          </p>
        </div>
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
