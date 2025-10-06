import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useRef } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./ContactPage.css";

function ContactCard({ children, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If scrolling down → fadeUp
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.add("animate-up");
              entry.target.classList.remove("animate-down");
            }
            // If scrolling up → fadeDown
            else {
              entry.target.classList.add("animate-down");
              entry.target.classList.remove("animate-up");
            }
          } else {
            // Reset when leaving viewport
            entry.target.classList.remove("animate-up", "animate-down");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Card
      ref={ref}
      className="h-100 contact-card shadow-sm"
      style={{ animationDelay: `${index * 0.2}s` }} // auto stagger
    >
      {children}
    </Card>
  );
}

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero text-center text-white d-flex align-items-center">
        <Container>
          <h1 className="display-4 fw-bold">Get In Touch</h1>
          <p className="lead mt-3">
            We'd love to hear from you! Reach out for collaborations, support,
            or inquiries.
          </p>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4 text-center">
            <Col md={3} sm={6}>
         <ContactCard index={0}>

                <Card.Body>
                  <i className="bi bi-geo-alt-fill contact-icon"></i>
                  <Card.Title>Our Address</Card.Title>
                  <Card.Text>
                    123 Tech Avenue, Lagos, Nigeria
                  </Card.Text>
                </Card.Body>
              </ContactCard>
            </Col>

            <Col md={3} sm={6}>
             <ContactCard index={1}>

                <Card.Body>
                  <i className="bi bi-envelope-fill contact-icon"></i>
                  <Card.Title>Email Us</Card.Title>
                  <Card.Text>info@ocjtech.com</Card.Text>
                </Card.Body>
              </ContactCard>
            </Col>

            <Col md={3} sm={6}>
             <ContactCard index={2}>

                <Card.Body>
                  <i className="bi bi-telephone-fill contact-icon"></i>
                  <Card.Title>Call Us</Card.Title>
                  <Card.Text>+234 906 3710 0448 </Card.Text>
                </Card.Body>
              </ContactCard>
            </Col>

            <Col md={3} sm={6}>
             <ContactCard index={3}>

                <Card.Body>
                  <i className="bi bi-clock-fill contact-icon"></i>
                  <Card.Title>Working Hours</Card.Title>
                  <Card.Text>Mon - Fri: 9:00 AM - 6:00 PM</Card.Text>
                </Card.Body>
              </ContactCard>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-1">
        <Container>
          <Row className="align-items-center g-4">
            {/* Form */}
            <Col md={6}>
              <h2 className="fw-bold mb-4">Send Us a Message</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                  />
                </Form.Group>

                <Button type="submit" className="btn-custom w-100">
                  Send Message
                </Button>
              </Form>
            </Col>

            {/* Google Map */}
            <Col md={6}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.356698186334!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4a9b07f9a6f%3A0x3af6d7f5aafc3b09!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1703249499393!5m2!1sen!2sng"
                width="100%"
                height="700"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
