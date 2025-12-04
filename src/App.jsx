import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import WaitlistModal from "./components/WaitlistModal";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <Router>
      <div className="App">
        <Header onOpenWaitlist={openWaitlist} />
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenWaitlist={openWaitlist} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
      </div>
    </Router>
  );
}

export default App;
