import {
  AiOutlineShoppingCart,
  AiOutlineCheckCircle,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Navs from "../Navs/Navs";
import Footer from "../Footer/Footer";
import "./ArticlePage.css";
import Modal from "react-modal";
import { db } from "../../firebase";

const ArticlePage = () => {
  const { prefabriquerId } = useParams();
  const [product, setProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "ArticleInfo"));
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setData(newData);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleCommanderClick = () => {
    setOpenModal(true);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
    setOpenModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // commande infos
  const [contact, setContact] = useState({ name: "", email: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "Commander"), {
        name: contact.name,
        email: contact.email,
        text: contact.text,
        articleTitre: data[prefabriquerId]?.titre || "",
      });

      console.log("Document written with ID: ", docRef.id);

      setShowModal(true); // Set showModal state to true
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Navs />
      <div className="top"></div>
      <div className="container w-100">
        <div className="row rr">
          <div className="col">
            {data.map((item, index) => {
              if (index === Number(prefabriquerId)) {
                return (
                  <img
                    src={item.imageURL}
                    alt={item.titre}
                    className="pic"
                    key={item.id}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="col borde">
            {data.map((item, index) => {
              if (index === Number(prefabriquerId)) {
                return (
                  <React.Fragment key={item.id}>
                    <h3>{item ? item.titre : ""}</h3>
                    <hr className="hr" />
                    <h2> Categorie :</h2>
                    <p>{item ? item.categorie : ""}</p>
                    <h2>Sous Categorie :</h2>
                    <p>{item ? item.sousCategorie : ""}</p>
                    <h2>Prix :</h2>
                    <p>
                      {item ? item.prix : ""} <span>DH</span>
                    </p>
                    <div className="prix">
                      {item ? item.prixAvant : ""} <span>DH</span>
                    </div>
                  </React.Fragment>
                );
              }
              return null;
            })}
            <button
              className="btn btn-outline-dark"
              id="cmd"
              onClick={handleCommanderClick}
            >
              <AiOutlineShoppingCart className="me-4" />
              Commander
            </button>
          </div>
        </div>
        <hr className="hrr" />
        <div className="row">
          <h1 className="h11">Details</h1>
          <table className="table table-striped">
            <tbody>
              {data.map((item, index) => {
                if (index === Number(prefabriquerId)) {
                  return (
                    <React.Fragment key={item.id}>
                      <tr>
                        <th scope="row">Longueur</th>
                        <td></td>
                        <td></td>
                        <td className="td">{item.longueur}</td>
                      </tr>
                      <tr>
                        <th scope="row">Largeur</th>
                        <td></td>
                        <td></td>
                        <td className="td">{item.largeur}</td>
                      </tr>
                      <tr>
                        <th scope="row">Hauteur</th>
                        <td></td>
                        <td></td>
                        <td className="td">{item.hauteur}</td>
                      </tr>
                      <tr>
                        <th scope="row">Couleur</th>
                        <td></td>
                        <td></td>
                        <td className="td">{item.couleur}</td>
                      </tr>
                      <tr>
                        <th scope="row">Finitions</th>
                        <td></td>
                        <td></td>
                        <td className="td">{item.finitions}</td>
                      </tr>
                      <tr>
                        <th scope="row">Matériel</th>
                        <td></td>
                        <td></td>
                        <td className="td">{item.material}</td>
                      </tr>
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
        <hr className="hrr" />
      </div>
      <Footer />

      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <form className="formu" onSubmit={handleSubmit}>
          <h2>Entrer vos informations</h2>
          <div className="formu-group">
            <div className="input-container">
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={handleChange}
                className="formu-control"
                placeholder="Nom & prenom"
                autoComplete="off"
              />
              <AiOutlineUser className="input-icon" />
            </div>
          </div>
          <div className="formu-group">
            <div className="input-container">
              <input
                type="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                className="formu-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                autoComplete="off"
              />
              <AiOutlineMail className="input-icon" />
            </div>
          </div>
          <div className="formu-group">
            <textarea
              type="text"
              name="text"
              value={contact.text}
              onChange={handleChange}
              className="formu-control"
              id="message"
              placeholder="Votre message"
            />
          </div>
          <button type="submit" className="la btn" id="envoyer">
            Envoyer
          </button>
        </form>
      </Modal>
      <Modal
        isOpen={showModal}
        onRequestClose={handleClose}
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <div className="modal-content">
          <div className="modal-icon">
            <AiOutlineCheckCircle />
          </div>
          <p>Votre commande a été envoyée avec succès!</p>
        </div>
      </Modal>
    </>
  );
};

export default ArticlePage;
