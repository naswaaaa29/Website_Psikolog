import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaSearch, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="join">
          <p><strong>Yuk gabung membership premium RuangHati dan belajar bareng Psikolog kita!</strong></p>
          <button>Join sekarang</button>
        </div>
        <div className="footer-right">
          <p className="follow-title">Follow Us</p>
          <div className="socials">
            <a href="#"><i><FaTwitter/></i></a>
            <a href="#"><i><FaFacebook/></i></a>
            <a href="#"><i><FaInstagram/></i></a>
            <a href="#"><i><FaLinkedin/></i></a>
            <a href="#"><i><FaPinterest/></i></a>
            <a href="#"><i><FaYoutube/></i></a>
            <a href="#"><i><FaTiktok/></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
