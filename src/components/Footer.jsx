import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link } from "react-router-dom";
import "./Footer.css"


const Footer = () => {
  return (
  
   <footer className="footer bg-dark text-white pt-5 pb-3">
        <Container>
          <Row className="mb-4">
            <Col md={3}>
              <h5><span className="footer-highlight">OCJ TECH</span> </h5>
              <p>
                Your trusted partner for software development, web design, and
                digital transformation.
              </p>
            </Col>
            <Col md={3}>
              <h5 className="quick-link">Quick Links</h5>
              <ul className="list-unstyled">
               <li>
    <Link to="/" className="footer-link">Home</Link>
  </li>
  <li>
    <Link to="/AboutPage" className="footer-link">About</Link>
  </li>
  <li>
    <Link to="/services" className="footer-link">Services</Link>
  </li>
  <li>
    <Link to="/ContactPage" className="footer-link">Contact</Link>
  </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Our Services</h5>
              <ul className="list-unstyled">
                <li>Software Development</li>
                <li>Data Analysis</li>
                <li>Web Design</li>
                <li>Graphics & Video Editing</li>
                <li>Digital Marketing</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Contact Info</h5>
              <p>Email: info@ocjtech.com</p>
              <p>Phone: +234 906 3710 0448 </p>
              <p>Location: Lagos, Nigeria</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="mb-0">&copy; {new Date().getFullYear()} <span className="footer-highlight">OCJ TECH</span> . All Rights Reserved.</p>
            </Col>
            <div className="socials">
      <a href="#"><i class="fa-brands  fa-facebook"></i></a>
        <a href="#"><i class="fa-brands  fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-skype"></i></a>
    </div>
          </Row>
        </Container>
      </footer>
  )
}

export default Footer
