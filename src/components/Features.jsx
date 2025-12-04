import React from "react";
import "./Features.css";

const featuresList = [
  {
    title: "No Phone Numbers",
    description:
      "Keep your identity private with Account IDs. No phone number or email required to sign up.",
    icon: "🆔",
  },
  {
    title: "No Data Breaches",
    description:
      "PrivyChat doesn't collect your private data, so there's nothing to leak.",
    icon: "🛡️",
  },
  {
    title: "Safe Paths",
    description:
      "Onion-routed paths protect your conversations from hackers and eavesdroppers.",
    icon: "🧅",
  },
  {
    title: "Open Source",
    description:
      "Privacy is more than a promise. Anyone can view, audit, and contribute to our code.",
    icon: "💻",
  },
  {
    title: "No Trackers",
    description:
      "Your data is never collected, never tracked, and never sold to third parties.",
    icon: "🚫",
  },
  {
    title: "Group Chats",
    description: "End-to-end encrypted group chats for up to 100 people.",
    icon: "👥",
  },
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Privacy Benefits</h2>
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
