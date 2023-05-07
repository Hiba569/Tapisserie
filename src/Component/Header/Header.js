import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className=" banner  ">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1 className=" py-1 redressed banner-desc">
              Qualité, Matériaux, <br />
              Haut-De-Gamme
            </h1>
            <p>
              <span className="redressed banner-p">
                Nos objets artisanaux en bois sont fabriqués
                <br /> avec les meilleurs matériaux
              </span>{" "}
              <br />
            </p>
            <button className="btn btn-outline-info btn-lg rounded-0 merriweather">
              <a href="#nos_service">Explorer</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
