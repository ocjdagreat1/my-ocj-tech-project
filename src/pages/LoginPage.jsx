import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./LoginPage.css";
import authy from "../assets/authy.svg"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/react-project/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.status === "success") {
        // Save JWT in localStorage
        localStorage.setItem("token", data.token);

        // Redirect to dashboard or protected page
        navigate("/dashboard");
      }
    } catch (err) {
      setMessage("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      {/* Left side welcome text */}
      <div className="welcome-text">
        <h1>WELCOME TO</h1>
        <h2>OCJ TECH</h2>
        <p>Where All Tech Courses Are 100% Tuition Free</p>
        <button className="join-btn">Join Us</button>
      </div>

      {/* Right side login box */}
      <div className="login-box">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={authy} alt="OCJ Tech Logo" className="logo" />
          <h2 className="logo-text">OCJ Tech</h2>
        </div>

        <h3>Login Here</h3>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your email/username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            className="w-100 fw-bold"
            style={{
              background: "linear-gradient(to right, #06b6d4, #3b82f6, #9333ea)",
              border: "none",
            }}
          >
            Login
          </Button>

          {/* Display login message */}
          {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}

          <p>
            Don’t have an account? <a href="/register">Signup</a> here
          </p>
        </form>

        <div className="social-login">
          <p>Log in with</p>
          <div className="icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-skype"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
