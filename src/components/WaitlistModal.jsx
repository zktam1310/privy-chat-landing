import React, { useState } from "react";
import "./WaitlistModal.css";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        {!submitted ? (
          <>
            <h2>Join the Waitlist</h2>
            <p>
              PrivyChat is currently invite-only. Enter your email to request an
              invitation code.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">
                Request Invite
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>You're on the list!</h2>
            <p>
              We've received your request. Please check your inbox for your
              invitation code soon.
            </p>
            <button className="btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
