import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useRef, useEffect } from "react";
import Collapse from 'react-bootstrap/Collapse';
import "./AboutPage.css";
import card4 from "../assets/card4.jpg"
import card5 from "../assets/card5.jpg"
import card3 from "../assets/card3.jpg"
import card7 from "../assets/card7.jpg"
import card9 from "../assets/card9.jpg"
import card10 from "../assets/card10.jpg"
import OCJ from"../assets/Ocj.jpg"
import { style } from "framer-motion/client";



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


function About() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero text-center text-white d-flex align-items-center">
        <Container>
          <h1 className="display-4 fw-bold">About <span className="hero-highlight">OCJ TECH</span> </h1>
          <p className="lead mt-3">
            Empowering businesses and individuals through technology, innovation,
            and creativity.
          </p>
          <p>
    At <span className="hero-highlight">OCJ Tech</span>, we are passionate about innovation and technology. 
    Our mission is to provide high-quality digital solutions,<br /> including 
    web design, software development, and tech training programs that 
    empower individuals and businesses in the digital world. <br />
  </p>
  <p>
    With a focus on creativity, professionalism, and modern tools, 
    <span className="hero-highlight">OCJ Tech</span> is committed to helping clients succeed in today’s fast-paced 
    digital era.
  </p>
  


 <Button className='btn'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Read More
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <p>
  We believe in building not just solutions, but long-term relationships 
  with our clients. Our dedicated team ensures that every project is 
  tailored to meet unique needs, delivering results that are both effective 
  and sustainable.
</p>
         <p>
  Beyond services,<span className="hero-highlight">OCJ Tech</span>  also invests in training and mentorship, 
  equipping the next generation of innovators with the skills they need 
  to thrive in the global tech industry.
</p>

<p>
  Whether you are a business looking to grow online, a professional 
  seeking to upgrade your digital skills, or a startup in need of 
  reliable technology solutions, <span className="hero-highlight">OCJ Tech</span> is your trusted partner 
  for success in the digital age.
</p>
        </div>
      </Collapse>
</Container>
      </section>


      {/* Mission & Vision Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col md={6}>
             <ContactCard index={0}>
                <Card.Body>
                  <Card.Title className="fw-bold">Our Mission</Card.Title>
                  <Card.Text>
                    At <span className="hero-highlight">OCJ TECH</span> , our mission is to deliver high-quality digital
                    solutions in software development, data analytics, web design,
                    and digital marketing. We aim to make technology accessible
                    and impactful for everyone.
                  </Card.Text>
                </Card.Body>
              </ContactCard>
            </Col>
            <Col md={6}>
            <ContactCard index={1}>
                <Card.Body>
                  <Card.Title className="fw-bold">Our Vision</Card.Title>
                  <Card.Text>
                    We envision a world where technology drives growth,
                    creativity, and innovation. Our goal is to be a leading
                    provider of tech solutions across Africa and the world.
                  </Card.Text>
                </Card.Body>
              </ContactCard>
            </Col>
          </Row>
        </Container>
      </section>

     {/* Team Section */}
<section className="py-5 bg-light">
  <Container>
    <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
    <Row className="g-4">
      <Col md={4} sm={6} xs={12}>
        <Card className="team-card shadow-sm h-100">
          <Card.Img variant="top" src={OCJ} />
          <Card.Body className="text-center">
            <Card.Title>Opara Justine</Card.Title>
            <Card.Text>Founder & Lead Developer</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} sm={6} xs={12}>
        <Card className="team-card shadow-sm h-100">
          <Card.Img variant="top" src={card5} />
          <Card.Body className="text-center">
            <Card.Title>Mark Reinder</Card.Title>
            <Card.Text>UI/UX Designer</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} sm={6} xs={12}>
        <Card className="team-card shadow-sm h-100">
          <Card.Img variant="top" src={card3} />
          <Card.Body className="text-center">
            <Card.Title>John Smith</Card.Title>
            <Card.Text>Data Analyst</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Add more members here if needed */}
      <Col md={4} sm={6} xs={12}>
        <Card className="team-card shadow-sm h-100">
          <Card.Img variant="top" src={card10} />
          <Card.Body className="text-center">
            <Card.Title>Anna Whitefield</Card.Title>
            <Card.Text>Marketing Specialist</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} sm={6} xs={12}>
        <Card className="team-card shadow-sm h-100">
          <Card.Img variant="top" src={card7} />
          <Card.Body className="text-center">
            <Card.Title>Jimmy Ray</Card.Title>
            <Card.Text>Project Manager</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} sm={6} xs={12}>
        <Card className="team-card shadow-sm h-100">
          <Card.Img variant="top" src={card9} />
          <Card.Body className="text-center">
            <Card.Title>Mary Johnson</Card.Title>
            <Card.Text>Web Developer</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


    </>
  );
}

export default About;
