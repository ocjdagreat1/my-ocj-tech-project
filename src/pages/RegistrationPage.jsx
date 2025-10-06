import { Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import authy from "../assets/authy.svg";
import "./RegistrationPage.css";
import {Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className="d-flex align-items-center bg-animated">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="ms-auto w-100 registration-container"
        >
        <Card
          className="p-4 shadow-lg rounded-4"
          style={{
            background: "rgba(255, 255, 255, 0.15)", // glass look
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "white",
          }}
        >
          <Card.Body className="text-center">
          
            <div className="d-flex align-items-center justify-content-center mb-3">
              <img src={authy} alt="OCJ TECH Logo" style={{ width: "60px", marginRight: "10px" }} />
              <h4 className="fw-bold text-danger m-0">OCJ TECH</h4>
            </div>

            <h3 className="fw-bold mt-3">Create Your Account</h3>
            <p className="text-light">
              Register below to get started with{" "}
              <span className="fw-bold text-danger">OCJ TECH</span>
            </p>

            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-semibold">Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-semibold">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter your password" required />
              </Form.Group>

              <Button
                type="submit"
                className="w-100 fw-bold"
                style={{
                  background: "linear-gradient(to right, #06b6d4, #3b82f6, #9333ea)",
                  border: "none",
                }}
              >
                Register
              </Button>
            </Form>

            <p className="mt-3 text-light">
              Already have an account?{" "}
              <Link to ="/LoginPage" className="fw-bold text-danger">Login here</Link>
            </p>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegistrationPage;
