import "../components/Hero.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='hero'>
      <h1>Welcome to the Digital world</h1>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Explore
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         "Explore the digital world with our high-in-demand professional <br /> tech courses. Gain the skills you need to thrive in today’s fast-paced digital era,<br /> from mastering cutting-edge tools to building career-ready expertise.<br /> Step into the future with confidence and unlock endless opportunities in technology."
        </div>
      </Collapse>
    </div>
  )
}

export default Hero
