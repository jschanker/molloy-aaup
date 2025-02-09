import { Link } from 'react-router-dom';

export default function CodifyingRedBook() {
  return (
    <div className="container-fluid">
      <h1>Meeting notes from Codifying the Red Book Virtual Workshop</h1>
      <p>
        Codifying the Redbook is a virtual workshop about ways to gain or
        strengthen policies in your union contract of faculty handbook to
        protect academic freedom, faculty oversight of curriculum, protest and
        dissent, due process and more. The Spring 2025 workshop was held on
        February 6, 2025. <br />
        <Link to="/assets/Codifying_the_Redbook_Spring_2025.pdf">
          Download the Slides from the Meeting
        </Link>
      </p>
    </div>
  );
}
