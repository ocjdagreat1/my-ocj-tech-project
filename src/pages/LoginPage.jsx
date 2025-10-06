import { Button } from "react-bootstrap";
import "./LoginPage.css";
import authy from "../assets/authy.svg"; 

const LoginPage = () => {
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
        <input type="text" placeholder="Enter your email/username" />
        <input type="password" placeholder="Enter your password" />

        
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
                     <p>
                Don’t have an account? <a href="#">Signup</a> here
        </p>

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
