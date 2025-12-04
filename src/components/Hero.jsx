import React from "react";
import "./Hero.css";

const Hero = ({ onOpenWaitlist }) => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Send Messages,
            <br />
            Not Metadata.
          </h1>
          <p className="hero-subtitle">
            PrivyChat is an end-to-end encrypted messenger that minimizes
            metadata to keep your conversations truly private. No phone numbers,
            no tracking.
          </p>
          <div className="hero-cta">
            <button className="btn-primary hero-btn" onClick={onOpenWaitlist}>
              Join Waitlist
            </button>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/logo.png" alt="PrivyChat App" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
