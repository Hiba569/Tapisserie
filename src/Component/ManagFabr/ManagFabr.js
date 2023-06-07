import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import NavAdmin from "../NavAdmin/NavAdmin";
import "./ManagFabr.css";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { RiWhatsappLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

const ManagFabr = () => {
  const [showFabriquer, setShowFabriquer] = useState(true);
  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);

  const handleClickFabriquer = () => {
    setShowFabriquer(false);
    setShowTable1(true);
    setShowTable2(false);
  };

  const handleClickRestaurer = () => {
    setShowFabriquer(false);
    setShowTable1(false);
    setShowTable2(true);
  };

  return (
    <>
      <div className="contain">
        <NavAdmin />
        <div className="fabriquer">
          {showFabriquer && (
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div id="card1" onClick={handleClickFabriquer}>
                  <h5 className="card-title">Fabriquer</h5>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div id="card2" onClick={handleClickRestaurer}>
                  <h5 className="card-title">Restaurer</h5>
                </div>
              </div>
            </div>
          )}
          {showTable1 && <Table1 />}
          {showTable2 && <Table2 />}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

//fabrication
const Table1 = () => {
  // list data
  const [data, setData] = useState([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "Fabriquer"));
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setData(newData);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  //email
  const handleChatbotClick = (email) => {
    window.open(`mailto:${email}`);
    console.log("email show");
  };

  //whatssap
  const handleWhatsAppClick = (number) => {
    const whatsappURL = `https://wa.me/${number}`;
    window.open(whatsappURL, "_blank");
  };

  //etat
  const handleClick = async (itemId) => {
    await updateDoc(doc(db, "Fabriquer", itemId), {
      status: "Refusé",
    });

    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, status: "Refusé" } : item
      )
    );
  };

  const getStatusClass = (status) => {
    return status === "Refusé" ? "btn btn-secondary" : "btn btn-success";
  };

  const getStatusLabel = (status) => {
    return status === "Refusé" ? "Refusé" : "Accepté";
  };
  //delete
  const handleDelete = async (itemId) => {
    // Delete row from Firestore
    await deleteDoc(doc(db, "Fabriquer", itemId));

    // Update state to remove the deleted row
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };
  return (
    <>
      <section className="container" id="fabriquer">
        <h1 className="comande">Gestion des meubles fabriqués</h1>
        <table className="table table-striped ">
          <thead className="thead1">
            <tr>
              <th scope="col">Nom &amp; Prenom</th>
              <th scope="col">Details</th>
              <th scope="col">Contact</th>
              <th scope="col">Etat</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="data">{item.name}</td>
                <td className="data">
                  Nom : {item.nomObject}
                  <br />
                  Longueur : {item.longueur}
                  <br />
                  Largeur : {item.largeur}
                  <br />
                  Hauteur : {item.hauteur}
                  <br />
                  Material : {item.material}
                  <br />
                  Details : {item.details}
                  <br />
                  <span className="red">Budget : {item.budget}</span>
                </td>
                <td className="data">
                  <div
                    onClick={() => handleChatbotClick(item.email)}
                    style={{ cursor: "pointer", marginTop: "40px" }}
                  >
                    <i className="send" id="send">
                      <HiOutlineMail />
                    </i>
                    {item.email}
                  </div>
                  <br />
                  <div
                    onClick={() => handleWhatsAppClick(item.numero)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="send" id="send2">
                      <RiWhatsappLine />
                    </i>
                    {item.numero}
                  </div>
                </td>
                <td className="data">
                  <button
                    className={getStatusClass(item.status)}
                    onClick={() => handleClick(item.id)}
                    style={{ fontSize: "23px", marginTop: "50%" }}
                  >
                    {getStatusLabel(item.status)}
                  </button>
                </td>
                <td className="data" id="delet">
                  <i  onClick={() => handleDelete(item.id)}>
                    <AiOutlineDelete />
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

//restauration
const Table2 = () => {
  // list data
  const [data, setData] = useState([]);

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "Restaurer"));
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setData(newData);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  //email
  const handleChatbotClick = (email) => {
    window.open(`mailto:${email}`);
    console.log("email show");
  };

  //whatssap
  const handleWhatsAppClick = (number) => {
    const whatsappURL = `https://wa.me/${number}`;
    window.open(whatsappURL, "_blank");
  };

  //etat
  const handleClick = async (itemId) => {
    await updateDoc(doc(db, "Restaurer", itemId), {
      status: "Refusé",
    });

    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, status: "Refusé" } : item
      )
    );
  };

  const getStatusClass = (status) => {
    return status === "Refusé" ? "btn btn-secondary" : "btn btn-success";
  };

  const getStatusLabel = (status) => {
    return status === "Refusé" ? "Refusé" : "Accepté";
  };

  //delete
  const handleDelete = async (itemId) => {
    // Delete row from Firestore
    await deleteDoc(doc(db, "Restaurer", itemId));

    // Update state to remove the deleted row
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };
  return (
    <>
      <section className="container" id="fabriquer">
        <h1 className="comande">Gestion des meubles restaurés</h1>
        <table className="table table-striped ">
          <thead className="thead1">
            <tr>
              <th scope="col">Nom &amp; Prenom</th>
              <th scope="col">Image</th>
              <th scope="col">Details</th>
              <th scope="col">Contact</th>
              <th scope="col">Etat</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="data">{item.nom}</td>
                <td className="data">
                  <img
                    src={item.imageURL}
                    style={{ width: "200px", height: "260px" }}
                  />
                </td>
                <td className="data">
                  Longueur : {item.longueur}
                  <br />
                  Largeur : {item.largeur}
                  <br />
                  Hauteur : {item.hauteur}
                  <br />
                  Material : {item.material}
                  <br />
                  Details : {item.details}
                  <br />
                  <span className="red">Budget : {item.budget}</span>
                </td>
                <td className="data">
                  <div
                    onClick={() => handleChatbotClick(item.email)}
                    style={{ cursor: "pointer", marginTop: "40px" }}
                  >
                    <i className="send" id="send">
                      <HiOutlineMail />
                    </i>
                    {item.email}
                  </div>
                  <br />
                  <div
                    onClick={() => handleWhatsAppClick(item.numero)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="send" id="send2">
                      <RiWhatsappLine />
                    </i>
                    {item.numero}
                  </div>
                </td>
                <td className="data">
                  <button
                    className={getStatusClass(item.status)}
                    onClick={() => handleClick(item.id)}
                    style={{ fontSize: "23px", marginTop: "50%" }}
                  >
                    {getStatusLabel(item.status)}
                  </button>
                </td>
                <td className="data"  id="delet">
                  <i onClick={() => handleDelete(item.id)}>
                    <AiOutlineDelete />
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ManagFabr;
