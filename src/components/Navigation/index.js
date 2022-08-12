import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './navigation.scss';

function Navigation() {
  return (
    <Navbar variant="dark" className="nav-bar sticky-top" expand="lg">
      <Container className="nav-bar-container">
        <Navbar.Brand className="logo" href="#home">
          <Image roundedCircle src={logo} width="100" height="100" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="nav-list">
            <Nav className="me-auto">
              <Nav.Link className="nav-link home-link" href="/">
                <FontAwesomeIcon icon={faHome} className="home-link" />
              </Nav.Link>
              <Nav.Link className="nav-link about-link" href="about">
                <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
              <Nav.Link className="nav-link contact-link" href="#contact">
                <FontAwesomeIcon icon={faEnvelope} />
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
