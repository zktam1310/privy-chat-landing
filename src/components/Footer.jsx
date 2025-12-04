import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="PrivyChat" className="footer-logo-img" />
          <span>PrivyChat</span>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <Link to="/#features">Features</Link>
            <a href="#">Security</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <p>&copy; {new Date().getFullYear()} PrivyChat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
