import { Navbar ,Nav} from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import { useLocation } from "react-router";
const Menu = () => {
    const location =useLocation();


    return (
    
    <Navbar>
        <Container>
          <Navbar.Brand href="#home">Hello This is imagequiz</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/Login">Login</Nav.Link>
          <Nav.Link href="#/Register">Register</Nav.Link>
              
            <Navbar.Text>
              Signed in as: <a href="#login"></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
};


export default Menu;