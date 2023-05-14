import React from "react";
import "./Navs.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { images } from "../../Constants";
import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";

const Navs = () => {
  return (
    <>
      <Navbar expand="lg" className="cc-navbar navbar-dark fixed-top w-100">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={images.tapp} title="logo" alt="..." className="image" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0 ">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
              <Link to="/prefabriquer" className="nav-link">
                Préfabriquer
              </Link>
              <Link to="/restaurer" className="nav-link">
                Restaurer
              </Link>
              <Link to="/fabriquer" className="nav-link">
                Fabriquer
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <Link to="/Login" id="login" className="nav-link">
                <i>
                  <FiLogIn />
                </i>
                Sing In/Sing Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;
