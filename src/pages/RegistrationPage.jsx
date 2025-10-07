import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import authy from "../assets/authy.svg";
import "./RegistrationPage.css";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [fullName, setFullName] = useState(""); // optional if backend uses only email/password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost/backend/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.status === "success") {
        // Redirect to login page after successful registration
        navigate("/LoginPage");
      }
    } catch (err) {
      setMessage("An error occurred. Please try again.");
      console.error(err);
    }
  };

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
            background: "rgba(255, 255, 255, 0.15)",
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
              Register below to get started with <span className="fw-bold text-danger">OCJ TECH</span>
            </p>

            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-semibold">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-semibold">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
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

              {/* Display message */}
              {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}

              <p className="mt-3 text-light">
                Already have an account?{" "}
                <Link to="/LoginPage" className="fw-bold text-danger">
                  Login here
                </Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegistrationPage;
