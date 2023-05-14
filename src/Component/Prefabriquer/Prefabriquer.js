import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navs from "../Navs/Navs";
import "./Prefabriquer.css";
import { Card, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { images } from "../../Constants";
import Data from "../../Constants/data";

const Prefabriquer = () => {
  const bb = Data.map((product) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <Link to={"/prefabriquer/${product.id}"}>
            <img src={product.img} />{" "}
          </Link>
        </div>
      </div>
    );
  });
  const navigate = useNavigate();
  return (
    <>
      <Navs />
      <div className=" bg w-100 ">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <h1 className="text-capitalize py-1 redressed bg-desc">
                Notre sélection de meubles
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyy">
        <div className="container">
          <hr className="ligne" />
          <h3>Élevez votre espace de vie avec nos magnifiques meubles</h3>
          <div className="row">{bb}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Prefabriquer;
