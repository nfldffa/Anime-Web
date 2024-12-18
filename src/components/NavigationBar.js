import {Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"

const NavigationBar= () => {
  return (
    <div>
    <Navbar className="custom-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="/">WIBUFLIX</Navbar.Brand>
          <Nav>
          <Nav.Link href="#trending">TRENDING</Nav.Link>
          <Nav.Link href="#romance">ROMANCE</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    </div>
  )
} 

export default NavigationBar