import Carousel from 'react-bootstrap/Carousel';
import computer3 from "../assets/computer3.jpg"; 
import computer5 from "../assets/computer5.jpg";
import computer6 from "../assets/computer6.jpg";
import photo3 from "../assets/photo3.jpeg";
import photo2 from "../assets/photo2.jpeg";
import graphics from "../assets/graphics.jpg"
import "./Carousel.css"

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={computer3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fullstack software development</h3>
          <p>Learn new technologies with our fullstack sotware development courses.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={400}>
        <img
          className="d-block w-100"
          src={computer5}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Data Analysis</h3>
          <p>Data Analysis courses are made easier with our advanced data analytic tools.</p>
        </Carousel.Caption>
      </Carousel.Item >

      <Carousel.Item interval={300}>
        <img
          className="d-block w-100"
          src={computer6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Web Design</h3>
          <p>Learn how to create stunning websites in our Web Design class. From layout and styling to responsive design, we’ll Tutor you step by step on how to build professional websites with ease.</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item interval={200}>
        <img
          className="d-block w-100"
          src={photo3}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Video Editing</h3>
          <p>Learn how to create stunning videos and photos with our multimedia video editing tools. Master the art of editing and bring your creative ideas to life with ease and professionalism.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo2}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Digital Marketing</h3>
          <p>Master the art of Digital Marketing with our professional course. Learn SEO, social media marketing, content creation, and online advertising to grow businesses and build a successful career in the digital world. Join us today and take your first step into the future of marketing.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={graphics}
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3>Graphics Design</h3>
          <p>Unlock your creativity with our Graphic Design course. Learn how to design professional logos, posters, and digital content using modern tools. Build the skills you need to create stunning visuals and stand out in today’s digital world.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
