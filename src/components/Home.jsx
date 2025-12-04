import React, { useState } from "react";
import Hero from "./Hero";
import Features from "./Features";
import WaitlistModal from "./WaitlistModal";

const Home = ({ onOpenWaitlist }) => {
  // We can lift the state up to App if needed, but for now,
  // if the "Join Waitlist" button is in Header (which is in App),
  // we might need to pass the open handler down or keep the modal in App.
  // Actually, the plan was to keep Header/Footer in App.
  // So Home just contains Hero and Features.

  return (
    <>
      <Hero onOpenWaitlist={onOpenWaitlist} />
      <Features />
    </>
  );
};

export default Home;
