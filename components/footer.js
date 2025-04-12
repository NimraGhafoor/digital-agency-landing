// components/Footer.js
import React from 'react';
import '../styles/globals.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-content">
          <div className="col-md-4 footer-section">
            <h4 className="footer-title">Rukous</h4>
            <p>Digital creative market for all users. Elegant style for your business.</p>
            <p>Copyright 2023. Rukous</p>
          </div>
          <div className="col-md-4 footer-links">
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Product</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Services</a></li>
              <li><a href="#" className="text-decoration-none text-dark">About</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Contact</a></li>
            </ul>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Careers</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Business</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Company</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Team</a></li>
            </ul>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="col-md-4 footer-contact">
            <h6 className="fw-bold">Any Question?</h6>
            <a href="#" className="btn btn-primary">Contact Us</a>
            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" 
        rel="stylesheet" 
      />
    </footer>
  );
}