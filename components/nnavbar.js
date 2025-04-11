import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 d-none d-lg-flex">
        <div className="container d-flex align-items-center justify-content-between">
          <Link href="/" className="navbar-brand fw-bold text-primary fs-4 mb-0" style={{ fontSize: '2.5rem' }}>
            Rukous
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                <Link href="/" className="nav-link active fw-medium text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/product" className="nav-link text-dark">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link text-dark">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link text-dark">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/footer" className="nav-link text-dark">
                  Contact
                </Link>
              </li>
            </ul>
            <Link href="/clients" className="btn btn-primary rounded-pill gap-2">
              Let’s Talk <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas Navbar for smaller screens */}
      <nav className="navbar navbar-light bg-light border-bottom py-3 d-lg-none">
        <div className="container d-flex align-items-center justify-content-between">
          <Link href="/" className="navbar-brand fw-bold text-primary fs-4 mb-0" style={{ fontSize: '2.5rem' }}>
            Rukous
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleOffcanvas}
            aria-controls="offcanvasNavbar"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-grow-1 pe-3">
            <li className="nav-item">
              <Link href="/" className="nav-link active fw-medium text-dark" onClick={toggleOffcanvas}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/product" className="nav-link text-dark" onClick={toggleOffcanvas}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link text-dark" onClick={toggleOffcanvas}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-dark" onClick={toggleOffcanvas}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/footer" className="nav-link text-dark" onClick={toggleOffcanvas}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-lg-none mt-3">
            <Link href="/clients" className="btn btn-primary w-100 rounded-pill d-flex align-items-center gap-2" onClick={toggleOffcanvas}>
              Let’s Talk <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}