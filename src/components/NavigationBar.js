import { Navbar, Container, Nav, FormControl, Form, Button } from "react-bootstrap"
// import logo from "../assets/logo/Vector.png
import vector from "../assets/images/logo/Vector.png"


const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <img src={vector}></img> LaslesVPN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto ">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Features</Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>
              <Nav.Link href="#link">Testimonials</Nav.Link>
              <Nav.Link href="#link">Help</Nav.Link>
              
              
            </Nav>
            
            <Button className="d-flex" href="#" variant="outline-danger">Sign Up</Button>
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar