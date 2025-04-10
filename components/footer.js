// components/Footer.js
import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h5>Rukous</h5>
            <p>Digital creative market for all user.</p>
            <p>Elegant style for your business</p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Product</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact Us</h5>
            <p>Any Question?</p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
        <div className="text-center">
          <small>Copyright © 2023 Rukous</small>
        </div>
        <div className="text-center mt-3">
          <a href="#" className="mx-2">Facebook</a>
          <a href="#" className="mx-2">Twitter</a>
          <a href="#" className="mx-2">Instagram</a>
          <a href="#" className="mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
  