import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Importing CSS for styling

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} AI Mock Interview. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

