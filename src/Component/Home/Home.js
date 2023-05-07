import React, { Fragment } from "react";
import Header from "../Header/Header";
import { images } from "../../Constants";
import "./Home.css";
import NosTravaux from "../NosTravaux/NosTravaux";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Navs from "../Navs/Navs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navs />
      <Header />

      {/* Notre Service */}
      <section className="cc-menu py-5 merriweather  " id="nos_service">
        <hr className="hr" />
        <div className="container">
          <h1 className="title">Nos Service</h1>
          <p className="p">____ce que nous pouvons faire ?____</p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card card-custom">
                <img src={images.prefb1} className="card-img-top" alt="img" />
                <Link className="lien" to="prefabriquer">
                  {" "}
                  Vente meubles Préfabriqués
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card card-custom">
                <img src={images.fab3} className="card-img-top" alt="..." />
                <Link className="lien" to="restaurer">
                  {" "}
                  Restauration de meubles
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card card-custom">
                <img src={images.rest2} className="card-img-top" alt="..." />
                <Link className="lien" to="fabriquer">
                  {" "}
                  Fabrication de meubles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />
      {/* Notre Atelier  */}
      <section className="cc-atelier merriweather py-5">
        <div className="container">
          <h1 className="title" id="title">
            Notre Atelier
          </h1>
          <p className="p">____CARACTÉRISTIQUES IMPRESSIONNANTES____</p>
          <div className="row">
            <div className="card mb-3 ">
              <div className="row ">
                <div className="col-md-6">
                  <img src={images.atelier1} className="img-f" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body px-0">
                    <h5 className="card-title redressed">
                      Artisanat de qualité pour votre intérieur
                    </h5>
                    <p className="card-text ">
                      Chez notre atelier de tapisserie, nous sommes passionnés
                      par la création de pièces uniques et de haute qualité qui
                      apportent une touche de confort et d'élégance à votre
                      intérieur
                    </p>
                    <p className="card-text">
                      <a href="#" className="text-muted btn">
                        Last updated 3 mins ago
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="card my-5">
              <div className="row ">
                <div className="col-md-6">
                  <div className="card-body px-0">
                    <h5 className="card-title redressed">
                      Réinventez votre mobilier avec notre atelier de tapisserie
                    </h5>
                    <p className="card-text">
                      Vous cherchez à donner une seconde vie à votre mobilier ?
                      Notre atelier de tapisserie peut vous aider à réinventer
                      vos meubles existants en leur donnant une nouvelle
                      apparence et une nouvelle vie.
                    </p>
                    <p className="card-text">
                      <a href="#" className="text-muted btn">
                        Last updated 3 mins ago
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={images.atelier2} className="img-f1" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Travaux */}
      <section className="cc-carousel merriweather text-dark text-center py-5">
        <hr className="hr" />
        <div className="container">
          <div className="row">
            <h1 className="title"> Nos Travaux</h1>
            <p className="p">____Dernières ameublement____</p>
          </div>
        </div>
        <NosTravaux />
      </section>

      <hr className="hr" />
      {/* Our Team */}
      <div className="body">
        <section className="cc-team ">
          <h1 className="title">Nos Equipe</h1>
          <p className="p">____L'ÉQUIPE DE TALENTS____</p>
          <div className="container" id="container">
            <div className="card" id="card">
              <div className="content">
                <div className="imgBx">
                  <img src={images.eqp1} alt="..." />
                </div>
                <div className="contentBx">
                  <h3>
                    Imane
                    <br />
                    <span>Chef</span>
                  </h3>
                </div>
              </div>
              <ul className="social">
                <li>
                  <a href="#" aria-hidden="true">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card" id="card">
              <div className="content">
                <div className="imgBx">
                  <img src={images.eqp2} alt="..." />
                </div>
                <div className="contentBx">
                  <h3>
                    ADIl
                    <br />
                    <span>ARTISAN</span>
                  </h3>
                </div>
              </div>
              <ul className="social">
                <li>
                  <a href="#" aria-hidden="true">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card" id="card">
              <div className="content">
                <div className="imgBx">
                  <img src={images.eqp3} alt="..." />
                </div>
                <div className="contentBx">
                  <h3>
                    LAMIAE
                    <br />
                    <span>ARTISANE</span>
                  </h3>
                </div>
              </div>
              <ul className="social">
                <li>
                  <a href="#" aria-hidden="true">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="card" id="card">
              <div className="content">
                <div className="imgBx">
                  <img src={images.eqp4} />
                </div>
                <div className="contentBx">
                  <h3>
                    MEHDI
                    <br />
                    <span>ARTISAN</span>
                  </h3>
                </div>
              </div>
              <ul className="social">
                <li>
                  <a href="facebook" aria-hidden="true">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="twitter" aria-hidden="true">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="instagram" aria-hidden="true">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <hr className="hr" />

      {/* Notre localisation */}
      <section className="cc-localisation">
        <h1 className="title">Notre Localisation</h1>
        <p className="p">____Venez nous rendre visite____</p>
        <div className="row">
          <div className="col ">
            <div className="desc">
              <h1>Rue Mohammed el Beqal</h1>
              <p>
                {" "}
                Marrakech 40001
                <br />
                0808601751
              </p>
            </div>
          </div>
          <div className="col">
            <div className="map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.03328663139!2d-8.01702568484659!3d31.632938981332533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee918f7ccced%3A0xab7eed84bc3a4494!2sTapisserie%20De%20R%C3%AAve%20(Azami%20Omar)!5e0!3m2!1sfr!2sma!4v1683030730933!5m2!1sfr!2sma"
                alt="..."
                width="900"
                height="800"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
