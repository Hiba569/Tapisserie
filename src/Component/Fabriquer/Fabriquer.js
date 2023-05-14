import React from "react";
import Navs from "../Navs/Navs";
import "./Fabriquer.css";
import Footer from "../Footer/Footer";

const Fabriquer = () => {
  return (
    <>
      <Navs />
      <div className=" lg w-100 ">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <h1 className="text-capitalize py-1 redressed lg-desc">
                Créez votre meuble idéal
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyy1">
        <div className="container">
          <hr className="ligne1" />
          <h3>Veuillez remplir les détails de l'objet désiré:</h3>

          <form>
            <div className="contexte">
              <h2>contexte</h2>
              <input
                type="text"
                className="form-control"
                placeholder="Nom de l’objet"
              />
              <textarea
                type="text"
                className="form-control"
                placeholder="Le But de l’objet"
              />
            </div>
            <div className="contexte">
              <h2>Mesures</h2>

              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  id="validationServerUsername"
                  placeholder="Longueur"
                  required
                />
                <div className="input-group-prepend">
                  <span className="input-group-text">cm</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  id="validationServerUsername"
                  placeholder="Largeur"
                  required
                />
                <div className="input-group-prepend">
                  <span className="input-group-text">cm</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  id="validationServerUsername"
                  placeholder="Hauteur"
                  required
                />
                <div className="input-group-prepend">
                  <span className="input-group-text">cm</span>
                </div>
              </div>
            </div>
            <div className="contexte">
              <h2>Matériel</h2>
              <textarea
                type="text"
                className="form-control"
                placeholder="Matériel"
              />
            </div>
            <div className="contexte">
              <h2>
                Détails supplémentaires (Description de l’objet/ses
                foncitonnalités)
              </h2>
              <textarea
                type="text"
                className="form-control"
                placeholder="text"
              />
            </div>
            <div className="contexte">
              <h2>Budjet (Valeur/Intervalle)</h2>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  id="validationServerUsername"
                  placeholder="Budget"
                  required
                />
                <div className="input-group-prepend">
                  <span className="input-group-text">MAD</span>
                </div>
              </div>
            </div>
            <div className="contexte">
              <h2>Contact</h2>
              <input
                type="text"
                className="form-control"
                placeholder="Nom et Prénom"
              />
              <div className="input-group">
                <input
                  type="email"
                  className="form-control "
                  id="validationServerUsername"
                  placeholder="Adresse e-mail"
                  required
                />
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
              </div>
              <input
                type="numero"
                className="form-control"
                placeholder="Numéro de Téléphone"
              />
            </div>
            <button type="submit" className="la btn btn-primary">
              Confirmer
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Fabriquer;
