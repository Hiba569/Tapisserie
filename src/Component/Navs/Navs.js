import React from "react";
import "./Navs.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { images } from "../../Constants";
import { Link } from "react-router-dom";

const Navs = () => {
  return (
    <Navbar expand="lg" className="cc-navbar navbar-dark fixed-top w-100">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={images.tapp} title="logo" alt="..." className="image"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" /> 
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto mb-2 mb-lg-0 ">
            <Link to="/"  className="nav-link">Accueil</Link>
            <Link to="prefabriquer" className="nav-link">Préfabriquer</Link>
            <Link to="restaurer" className="nav-link">Restaurer</Link>
            <Link to="fabriquer" className="nav-link">Fabriquer</Link>
            <Link to="contact"  className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
