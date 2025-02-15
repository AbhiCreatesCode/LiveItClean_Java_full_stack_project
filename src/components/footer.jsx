// import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About LiveItClean</h2>
          <p>LiveItClean is a platform dedicated to promoting sustainable living through eco-friendly products, carbon footprint tracking, and a supportive community.</p>
        </div>
        
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Tracker</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Carbon Calculator</a></li>
            <li><a href="#">Eco Transport</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: support@liveitclean.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Green Street, Eco City, Earth</p>
        </div>
        
        <div className="footer-section newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 LiveItClean. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
