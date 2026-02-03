import React from 'react'
import "./FullStack.css"

const FullStack = () => {
  return (
    <section className="fullstack-hero">
      <div className="overlay">
        <div className="content-box">
          <h1>Fullstack Software Development Course</h1>
          <p className="subtitle">
            Learn to build modern, scalable web applications from frontend to backend.
          </p>

          <ol className="features">
            <li>
              <h3>A Complete Learning Journey</h3>
              <p>
                From frontend design to backend architecture, we guide you through every layer
                of modern web and application development with hands-on real-world projects.
              </p>
            </li>

            <li>
              <h3>Cutting-Edge Technologies</h3>
              <p>
                Master HTML5, CSS3, JavaScript (ES6+), React, Node.js, Express, MongoDB,
                API design, microservices, and cloud deployment.
              </p>
            </li>

            <li>
              <h3>DevOps & Deployment Skills</h3>
              <p>
                Learn CI/CD pipelines, Docker, Git & GitHub, AWS, and Azure to build,
                test, and deploy applications efficiently.
              </p>
            </li>

            <li>
              <h3>Problem-Solving & Best Practices</h3>
              <p>
                Write clean, scalable, maintainable code using agile methodologies,
                design patterns, and test-driven development.
              </p>
            </li>

            <li>
              <h3>Expert Mentorship & Career Guidance</h3>
              <p>
                Get personalized mentorship, portfolio guidance, interview prep,
                and career support from industry professionals.
              </p>
            </li>

            <li>
              <h3>Flexible & Project-Based Learning</h3>
              <p>
                Learn at your own pace and graduate with a professional-grade
                fullstack project as proof of your skills.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default FullStack
