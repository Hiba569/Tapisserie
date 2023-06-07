import React, { useEffect, useState } from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import Sidebar from "../Sidebar/Sidebar";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import "./ManagCmd.css";
import { BiSearchAlt } from "react-icons/bi";
import { BsChatSquareDots } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const MangCmd = () => {
  // list data
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "Commander"));
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setData(newData);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleClick = async (itemId) => {
    await updateDoc(doc(db, "Commander", itemId), {
      status: "Terminé",
    });

    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, status: "Terminé" } : item
      )
    );
  };

  const getStatusClass = (status) => {
    return status === "Terminé" ? "btn btn-success" : "btn btn-primary";
  };

  const getStatusLabel = (status) => {
    return status === "Terminé" ? "Terminé" : "En cours";
  };

  const handleChatbotClick = (email) => {
    window.open(`mailto:${email}`);
    console.log("email show");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  //delete data
  const handleDelete = async (itemId) => {
    // Delete row from Firestore
    await deleteDoc(doc(db, "Commander", itemId));

    // Update state to remove the deleted row
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };
  return (
    <>
      <div className="contain ">
        <NavAdmin />
        <section className="container">
          <h1 className="comande">Les Commandes</h1>
          <div className="search-container">
            <input
              className="search-bar"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
            <BiSearchAlt className="search" />
          </div>
          <div></div>
          <table className="table">
            <thead className="thead">
              <tr>
                <th scope="col">Nom &amp; Prenom</th>
                <th scope="col">Email</th>
                <th scope="col">Article</th>
                <th scope="col">Message</th>
                <th scope="col">Contacter</th>
                <th scope="col">Etat</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="data">{item.name}</td>
                  <td className="data">{item.email}</td>
                  <td className="data">{item.articleTitre}</td>
                  <td className="data">{item.text}</td>
                  <td className="data">
                    <div onClick={() => handleChatbotClick(item.email)}>
                      <i className="send">
                        <BsChatSquareDots />
                      </i>
                    </div>
                  </td>
                  <td className="data">
                    <button
                      className={getStatusClass(item.status)}
                      onClick={() => handleClick(item.id)}
                      style={{ fontSize: "20px", whiteSpace: "nowrap" }}
                    >
                      {getStatusLabel(item.status)}
                    </button>
                  </td>
                  <td className="data">
                    <i className="delete" onClick={() => handleDelete(item.id)}>
                      <AiOutlineDelete />
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <Sidebar />
      </div>
    </>
  );
};

export default MangCmd;
