import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.ico'
import { Link } from 'react-router-dom';

const NavbarContainer = ()=>{
    return (
        <Navbar bg="light" data-bs-theme="ligth"  >
        <Container >
        <Navbar.Brand as={Link} to="/" >
            <img
              alt="Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            GameHub
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
            <Nav.Link as={Link} to="/library">Biblioteca</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarContainer