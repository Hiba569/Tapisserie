import React from "react";
import Navs from "../Navs/Navs";
import "./Restaurer.css";
import Footer from "../Footer/Footer";
import {
  AiOutlineCloudUpload,
  AiOutlineFileImage,
  AiOutlineCheck,
} from "react-icons/ai";
import { icons } from "react-icons";

const Restaurer = () => {

  return (
    <>
      <Navs />
      <div className=" mg w-100 ">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <h1 className="text-capitalize py-1 redressed mg-desc">
                Réveillez la splendeur de vos meubles anciens{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyy1">
        <div className="container">
          <hr className="ligne2" />
          <h3>
            Veuillez remplir les détails de l'objet que vous souhaitez réparer:
          </h3>

          <form>
            <div className="area">
              <h2>Image</h2>
              <form action="#">
                <i>
                  <AiOutlineCloudUpload />
                </i>
                <p>Browse File To Upload</p>
              </form>
              <section className="progress-area">
                <li className="row nn">
                  <i><AiOutlineFileImage /></i>
                  <div className="content">
                    <div className="details">
                      <span className="name">image_01.png . uploading</span>
                      <span className="percent">50%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress"> </div>
                    </div>
                  </div>
                </li>
              </section>
              <section className="uploaded-area">
                <li className="row nn">
                  <div className="content">
                    <i>
                      <AiOutlineFileImage />
                    </i>
                    <div className="details">
                      <span className="name">image_01.png . uploaded</span>
                      <span className="size">70 KB</span>
                    </div>
                  </div>
                  {/* <i>
                    <AiOutlineCheck />
                  </i> */}
                </li>
                <li className="row nn">
                  <div className="content">
                    <i>
                      <AiOutlineFileImage />
                    </i>
                    <div className="details">
                      <span className="name">image_01.png . uploaded</span>
                      <span className="size">70 KB</span>
                    </div>
                  </div>
                  {/* <i>
                    <AiOutlineCheck />
                  </i> */}
                </li>
                <li className="row nn">
                  <div className="content">
                    <i>
                      <AiOutlineFileImage />
                    </i>
                    <div className="details">
                      <span className="name">image_01.png . uploaded</span>
                      <span className="size">70 KB</span>
                    </div>
                  </div>
                  {/* <i>
                    <AiOutlineCheck />
                  </i> */}
                </li>
                <li className="row nn">
                  <div className="content">
                    <i>
                      <AiOutlineFileImage />
                    </i>
                    <div className="details">
                      <span className="name">image_01.png . uploaded</span>
                      <span className="size">70 KB</span>
                    </div>
                  </div>
                  {/* <i>
                    <AiOutlineCheck />
                  </i> */}
                </li>
              
              </section>

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
        <div className="renouvles">
          <h1>Objets Renouvelés</h1>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Restaurer;
