import Nav from 'react-bootstrap/Nav';
// import NavItem from 'react-bootstrap/NavItem';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from '../assets/aaup-molloy-university-logo.png';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container
        fluid
        style={
          {
            /*maxWidth: '100% !important',
    textOverflow: 'ellipsis',
    overflowX: 'hidden',*/
          }
        }
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="Molloy University AAUP" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown
              title="Faculty Resources"
              id="basic-nav-dropdown"
              style={
                {
                  /*whiteSpace: 'nowrap !important',
          textOverflow: 'ellipsis !important',
          width: '100px !important',
          display: 'block !important',
          overflow: 'hidden !important',*/
                }
              }
            >
              <NavDropdown.Item as={Link} to="/blog">
                Blog Feed
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/benefits">
                Benefits of Membership
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/professional-insurance">
                Professional Liability Insurance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/communications">
                National and State AAUP Communications
              </NavDropdown.Item>
              {/*<NavDropdown.Divider />*/}
            </NavDropdown>
            <NavDropdown title="Get Involved" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/updates-signup">
                Sign up for updates
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/send-email">
                Send e-mail to members
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/opportunities">
                Volunteer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/join" className="btn btn-primary">
              Join AAUP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
