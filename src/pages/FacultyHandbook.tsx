import { Link } from 'react-router-dom';

export default function CodifyingRedBook() {
  return (
    <div className="container-fluid">
      <h1>AAUP Analysis and feedback of Molloy's Faculty Handbook</h1>
      <p>
        <Link to="/assets/AAUP_Molloy_University_Handbook_Analysis_11_July_2025.pdf" reloadDocument>
          View the response as a PDF
        </Link>
      </p>
    </div>
  );
}
