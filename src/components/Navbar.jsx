import React from "react";
import { Link } from "react-router-dom";
import Logo from '../img/ruanghati.png';
import "./Navbar.css";
import { FaPhone, FaEnvelope, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Header */}
      <header className="topbar">
        <div className="logo">
          <img src={Logo} alt="Logo RuangHati" />
          {/* <span>RuangHati</span> */}
        </div>
        <div className="contact">
          <div className="contact-item">
            <i><FaPhone /></i>
            <div>
              <p>Hubungi Kami WA</p>
              <strong>0857 3856 4594</strong>
            </div>
          </div>
          <div className="contact-item">
            <i><FaEnvelope /></i>
            <div>
              <p>Email Kami</p>
              <strong>cs@rh.com</strong>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="">Beranda</Link></li>
          <li><Link to="/konsultasi">Konsultasi Sekarang</Link></li>
          <li><Link to="/psikolog">Psikolog</Link></li>
          <li><Link to="/artikel">Artikel</Link></li>
          <li><Link to="/kontak">Tentang Kami</Link></li>
        </ul>
        <div className="search">
          <i><FaSearch/></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
