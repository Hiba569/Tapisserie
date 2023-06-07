import React, { useEffect, useState } from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import Sidebar from "../Sidebar/Sidebar";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./ContactAdmin.css";
import { BiSearchAlt } from "react-icons/bi";
import { RiQuestionAnswerLine } from "react-icons/ri";

const ContactAdmin = () => {
  // list data
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAll = async () => {
    const querySnapshot = await getDocs(collection(db, "Contact"));
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setData(newData);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleChatbotClick = (email) => {
    window.open(`mailto:${email}`);
    console.log("email show");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="contain ">
        <NavAdmin />
        <section className="container">
          <h1 className="comande">Contacts</h1>
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
          <table className="table table-striped ">
            <thead className="theadd">
              <tr>
                <th scope="col">Nom &amp; Prenom</th>
                <th scope="col">Email</th>

                <th scope="col">Message</th>
                <th scope="col">Contacter</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="data">{item.name}</td>
                  <td className="data">{item.email}</td>
                  <td className="data">{item.text}</td>
                  <td className="data">
                    <div onClick={() => handleChatbotClick(item.email)}>
                      <i className="send" id="send">
                        <RiQuestionAnswerLine />
                      </i>
                    </div>
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

export default ContactAdmin;
