import Button from 'react-bootstrap/Button';
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../components/Navbar.css";
import authy from "../assets/authy.svg";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark" fixed="top">
      <Container fluid>
    
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={authy}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="brand-text">OCJ TECH</span>
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
        
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as ={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to ="/AboutPage">About</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Fullstack Software Development</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Data Analysis</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Web Design</NavDropdown.Item>
              <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Video Editing</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Digital Marketing</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Graphics Design</NavDropdown.Item>
            </NavDropdown>
           <Nav.Link as ={Link} to ="/ContactPage">Contact</Nav.Link>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item as ={Link} to="/RegistrationPage" >Register</NavDropdown.Item>
              <NavDropdown.Item as ={Link} to="/LoginPage" >Login</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>

          {/* Search Form */}
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "300px" }}
            />
            <Button className="btn" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
