import React, { useState } from "react";
import SponsorCard from "./SponsorCard";
import "./Sponsors.css";
import Layout from "@theme/Layout";
import sponsors from "../../database/sponsors";
import { FaPlusCircle } from 'react-icons/fa';

const OurSponsors: React.FC = () => {
  const [showScanner, setShowScanner] = useState(false);

  const handleJoinSponsor = () => {
    setShowScanner(true);
  };

  const handlePaymentSuccess = () => {
    setShowScanner(false);
    alert("Payment successful! Please fill in your sponsor info.");
    window.location.href = "https://forms.gle/8zBeFP98bpjDxm9u8";
  };

  return (
    <Layout>
      <div className="sponsor-page">
        <div className="sponsor-header">
          <h1 className="TitleText">Our Sponsors</h1>
          <p>
            Help CodeHarborHub grow and support open-source projects by donating
            today. Your contribution enables us to share valuable resources and
            knowledge on our website.
            <br />
            Thank you for your support!
          </p>
        </div>
        <div className="sponsors-list">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))}
          <div className="sponsor-card empty-card" onClick={handleJoinSponsor}>
            <h3>
              <FaPlusCircle className="join-icon" />
              Join as a Sponsor
            </h3>
          </div>
        </div>
        {showScanner && (
          <div className="scanner-popup">
            <div className="scanner-content">
              <h2 className="TitleText">Scan to Sponsor</h2>
              <img src="/sponsors/scan-pay.jpg" alt="Payment Scanner" />
              <button className="scanner-button" onClick={handlePaymentSuccess}>
                I have paid
              </button>
            </div>
          </div>
        )}
        <div className="support-links">
          <iframe
            src="https://github.com/sponsors/Ajay-Dhangar/button"
            title="Sponsor Ajay-Dhangar"
            height="32"
            width="114"
            style={{ border: 0, borderRadius: "6px" }}
           />
          <a
            href="https://www.patreon.com/ajay_dhangar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support on Patreon
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default OurSponsors;
