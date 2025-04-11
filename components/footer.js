// components/Footer.js
import React from 'react';
import '../styles/globals.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Rukous</h4>
            <p>Digital creative market for all users. Elegant style for your business.</p>
            <p>Copyright 2023. Rukous</p>
          </div>
          <div className="footer-links">
            <ul className="list-unstyled">
              <li>Product</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul className="list-unstyled">
              <li>Carrier</li>
              <li>Business</li>
              <li>Company</li>
              <li>Team</li>
            </ul>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h6 className="fw-bold">Any Question</h6>
            <a href="#" className="btn btn-primary">Contact Us</a>
            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet"></link>
    </footer>
  );
}