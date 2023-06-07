import React, { useState, useEffect, useRef } from "react";
import Navs from "../Navs/Navs";
import "./Restaurer.css";
import Footer from "../Footer/Footer";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import Modal from "react-modal";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";

const Restaurer = () => {
  const [restaurer, setrestaurer] = useState({
    longueur: "",
    largeur: "",
    hauteur: "",
    material: "",
    details: "",
    budget: "",
    nom: "",
    email: "",
    numero: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setrestaurer((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const docRef = await addDoc(collection(db, "Restaurer"), {
  //       longueur: restaurer.longueur + " cm",
  //       largeur: restaurer.longueur + " cm",
  //       hauteur: restaurer.hauteur + " cm",
  //       material: restaurer.material,
  //       details: restaurer.details,
  //       budget: restaurer.budget + "DH",
  //       nom: restaurer.nom,
  //       email: restaurer.email,
  //       numero: restaurer.numero,
  //     });

  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //   }
  // };
  const [showModal, setShowModal] = useState(false);
  const handleCommanderClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Upload Image

  const [imageUpload, setImageUpload] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const uploaFile = async (e) => {
    e.preventDefault();

    if (!imageUpload) return;

    try {
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}_${imageUpload.name}`;
      const imageRef = ref(storage, `Restaurer/${fileName}`);

      await uploadBytes(imageRef, imageUpload);

      const downloadURL = await getDownloadURL(imageRef);

      const docRef = await addDoc(collection(db, "Restaurer"), {
        longueur: restaurer.longueur + " cm",
        largeur: restaurer.longueur + " cm",
        hauteur: restaurer.hauteur + " cm",
        material: restaurer.material,
        details: restaurer.details,
        budget: restaurer.budget + "DH",
        nom: restaurer.nom,
        email: restaurer.email,
        numero: restaurer.numero,
        imageURL: downloadURL, // Add the download URL to the document
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document or uploading image: ", error);
    }
  };

  //select Image

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
    setSelectedFileName(file.name);
  };
  const handleIconClick = () => {
    document.getElementById("file").click();
  };

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

          <form onSubmit={uploaFile}>
            <div className="area">
              <input
                type="file"
                id="file"
                accept="image/"
                hidden
                onChange={handleFileChange}
              />
              <div className="img-area" data-img="">
                <AiOutlineCloudUpload
                  className="icone"
                  onClick={handleIconClick}
                />
                <h3>{selectedFileName ? selectedFileName : "Select image"}</h3>
              </div>
            </div>
            <div className="contexte">
              <h2>Mesures</h2>

              <div className="input-group">
                <input
                  type="text"
                  name="longueur"
                  value={restaurer.longueur}
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
                  value={restaurer.largeur}
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
                  value={restaurer.hauteur}
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
                value={restaurer.material}
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
                value={restaurer.details}
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
                  value={restaurer.budget}
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
                name="nom"
                value={restaurer.nom}
                onChange={handleChange}
                className="form-control"
                placeholder="Nom et Prénom"
                autoComplete="off"
              />
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={restaurer.email}
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
                type="numero"
                name="numero"
                value={restaurer.numero}
                onChange={handleChange}
                className="form-control"
                placeholder="Numéro de Téléphone"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="la btn btn-primary"
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

export default Restaurer;
