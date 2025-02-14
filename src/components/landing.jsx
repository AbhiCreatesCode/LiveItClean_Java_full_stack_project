// import React from "react";
import "./landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1>LiveItClean</h1>
        <p>&quot;Sustainability is not about giving up; it&apos;s about choosing wisely.&quot;</p>
        <a href="#get-started" className="cta-button">Get Started</a>
      </header>
      
      <section className="sliding-window">
        <div className="slides">
          <div className="slide">Eco-Friendly Marketplace</div>
          <div className="slide">Track Your Carbon Footprint</div>
          <div className="slide">Join the Green Community</div>
        </div>
      </section>
      
      <section className="useful-links">
        <h2>Explore More</h2>
        <ul>
          <li><a href="#marketplace">Eco Marketplace</a></li>
          <li><a href="#tracker">Carbon Footprint Tracker</a></li>
          <li><a href="#community">Community Forum</a></li>
          <li><a href="#transport">Eco-Friendly Transport</a></li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
