import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Happy Cake SPA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='me-3' to={"/"}>🏠 Home</Link>
            <Link className='me-3' to={"/contacto"}>📒 Contacto</Link>
          </Nav>
          <Nav>
            <Link href="#happy_cake">Happy Cake 🍰</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

