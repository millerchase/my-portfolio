import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faUser,
  faEnvelope,
  faFile
} from '@fortawesome/free-solid-svg-icons';
import './navigation.scss';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar variant="dark" className="nav-bar fixed-top" expand="lg">
      <Container className="nav-bar-container">
        <Navbar.Brand
          className="logo"
          onClick={() => handlePageChange('About')}
          href="#about"
        >
          <Image roundedCircle src={logo} alt="logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="">
            <Nav className="me-auto nav-list">
              <a
                onClick={() => handlePageChange('About')}
                className={`${
                  currentPage === 'About' ? 'nav-link selected' : 'nav-link'
                } about-link`}
                href="#about-me"
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
              <a
                onClick={() => handlePageChange('Project')}
                className={`${
                  currentPage === 'Project' ? 'nav-link selected' : 'nav-link'
                } project-link`}
                href="#projects"
              >
                <FontAwesomeIcon icon={faDesktop} className="project-link" />
              </a>
              <a
                onClick={() => handlePageChange('Resume')}
                className={`${
                  currentPage === 'Resume' ? 'nav-link selected' : 'nav-link'
                } resume-link`}
                href="#resume"
              >
                <FontAwesomeIcon icon={faFile} />
              </a>
              <a
                onClick={() => handlePageChange('Contact')}
                className={`${
                  currentPage === 'Contact' ? 'nav-link selected' : 'nav-link'
                } contact-link`}
                href="#contact"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
