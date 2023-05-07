import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      
      <ul className="social-media">
        <li>
          <a href="#" className="insta-link">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook />
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="prefabriquer">Prefabrique</Link>
        </li>
        <li>
          <Link to="restaurer">Restauration</Link>
        </li>
        <li>
          <Link to="fabriquer">Fabrication</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <p>© Copyright 2023 | All Rights Reserved</p>
    </footer>
  );
};


export default Footer;
