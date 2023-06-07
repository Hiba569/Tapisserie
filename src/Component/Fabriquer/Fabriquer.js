import React, { useState } from "react";
import Navs from "../Navs/Navs";
import "./Fabriquer.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Footer from "../Footer/Footer";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Modal from "react-modal";

const Fabriquer = () => {
  const [form, setForm] = useState({
    nomObject: "",
    longueur: "",
    largeur: "",
    hauteur: "",
    material: "",
    details: "",
    budget: "",
    email: "",
    name: "",
    numero: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "Fabriquer"), {
        nomObject: form.nomObject,
        longueur: form.longueur + " cm",
        largeur: form.longueur + " cm",
        hauteur: form.hauteur + " cm",
        material: form.material,
        details: form.details,
        budget: form.budget + "DH",
        email: form.email,
        name: form.name,
        numero: form.numero,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const handleCommanderClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

          <form onSubmit={handleSubmit}>
            <div className="contexte">
              <h2>contexte</h2>
              <input
                type="text"
                name="nomObject"
                value={form.nomObject}
                onChange={handleChange}
                className="form-control"
                placeholder="Nom de l’objet"
              />
            </div>
            <div className="contexte">
              <h2>Mesures</h2>

              <div className="input-group">
                <input
                  type="text"
                  name="longueur"
                  value={form.longueur}
                  onChange={handleChange}
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
                  name="largeur"
                  value={form.largeur}
                  onChange={handleChange}
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
                  name="hauteur"
                  value={form.hauteur}
                  onChange={handleChange}
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
                name="material"
                value={form.material}
                onChange={handleChange}
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
                name="details"
                value={form.details}
                onChange={handleChange}
                className="form-control"
                placeholder="text"
              />
            </div>
            <div className="contexte">
              <h2>Budjet (Valeur/Intervalle)</h2>
              <div className="input-group">
                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
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
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Nom et Prénom"
                autoComplete="off"
              />
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control "
                  id="validationServerUsername"
                  placeholder="Adresse e-mail"
                  autoComplete="off"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
              </div>
              <input
                name="numero"
                value={form.numero}
                onChange={handleChange}
                type="numero"
                className="form-control"
                placeholder="Numéro de Téléphone"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="la btn btn-primary "
              id="la"
              onClick={handleCommanderClick}
            >
              Confirmer
            </button>
          </form>
        </div>
      </div>

      <Footer />
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <div className="modal-content">
          <div className="modal-icon">
            <AiOutlineCheckCircle />
          </div>
          <p>Confirmation enregistrée avec succès 😊</p>
        </div>
      </Modal>
    </>
  );
};

export default Fabriquer;
