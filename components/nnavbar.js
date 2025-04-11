// components/Navbar.js
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Left: Logo */}
        <Link href="/" className="navbar-brand fw-bold text-primary fs-4 mb-0" style={{ fontSize: '2.5rem' }}>
          Rukous
        </Link>
        {/* Center: Nav Links */}
        <ul className="navbar-nav mx-auto gap-4 d-none d-lg-flex">
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
        {/* Right: Button */}
        <div className="d-none d-lg-block">
          <Link href="/clients" className="btn btn-primary px-4 py-2 rounded-pill d-flex align-items-center gap-2">
            Let’s Talk <FaArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
