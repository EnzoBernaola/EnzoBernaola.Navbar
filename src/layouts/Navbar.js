import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';


function NavBarReact() {
  return (
    <>
    <Navbar className='navBg' variant='dark' expand="lg">
      <Container>
        <img className='cart' src={require('../images/carrito.png')} />
        <Navbar.Brand as={Link} to = "/" >Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to = "/" >Products</Nav.Link>
            <Nav.Link as={Link} to = "About"  >About</Nav.Link>
            <Nav.Link as={Link} to = "Contact"  >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet></Outlet>
    </section>
    </>
  );
}

export default NavBarReact