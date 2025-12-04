import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onOpenWaitlist }) => {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo-container">
          <img src="/logo.png" alt="PrivyChat Logo" className="logo" />
          <span className="logo-text">PrivyChat</span>
        </Link>
        <nav className="nav">
          <a href="/#features" className="nav-link">
            Features
          </a>
          <Link to="/privacy-policy" className="nav-link">
            Privacy
          </Link>
          <button className="btn-primary" onClick={onOpenWaitlist}>
            Join Waitlist
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
