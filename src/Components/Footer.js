import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="social">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook-f"></i>
        </div>
        <div className="py-2 text-center footer-style">JustForYou &copy; &nbsp; {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;

