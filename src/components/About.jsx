import './About.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function About() {
  const [open, setOpen] = useState(false);
  return (
    <div id="about-ocj-tech">
  <h2>About <span style={{color:"#FF5733"}}>OCJ Tech</span></h2>
  <p>
    At OCJ Tech, We are compasion about innovation and technology. 
    Our mission is to provide high-quality digital solutions,<br /> including 
    web design, software development, and tech training programs that 
    empower individuals and businesses in the digital world. <br />
  </p>
  <p>
    With a focus on creativity, professionalism, and modern tools, 
    OCJ Tech is committed to helping clients succeed in today’s fast-paced 
    digital era.
  </p>
  <p>
  We believe in building not just solutions, but long-term relationships 
  with our clients. Our dedicated team ensures that every project is 
  tailored to meet unique needs, delivering results that are both effective 
  and sustainable.
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
  Beyond services, OCJ Tech also invests in training and mentorship, 
  equipping the next generation of innovators with the skills they need 
  to thrive in the global tech industry.
</p>

<p>
  Whether you are a business looking to grow online, a professional 
  seeking to upgrade your digital skills, or a startup in need of 
  reliable technology solutions, OCJ Tech is your trusted partner 
  for success in the digital age.
</p>
        </div>
      </Collapse>
</div>
  )
}

export default About
