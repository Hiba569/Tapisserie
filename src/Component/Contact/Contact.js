import React, { useState } from "react";
import Navs from "../Navs/Navs";
import Footer from "../Footer/Footer";
import "./Contact.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
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
      const docRef = await addDoc(collection(db, "Contact"), {
        name: contact.name,
        email: contact.email,
        text: contact.text,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Navs />
      <div className="ng">
        <div className="container">
          <div className="row">
            <div className="col col-md-6 info">
              <div className="adresse">
                <h3>Address</h3>
                <p>
                  Rue Mohammed el Beqal
                  <br />
                  Marrakech 40001
                </p>
              </div>
              <div className="phone">
                <h3>Phone</h3>
                <p>0808601751</p>
              </div>
              <div className="emaile">
                <h3>Email</h3>
                <p>tapisserieReve@gmail.com </p>
              </div>
            </div>
            <div className="col col-md-6">
              <form className="formulaire" onSubmit={handleSubmit}>
                <h2>Send Message</h2>
                <p className="msg">vous aurez bientôt de nos nouvelles</p>
                <div className="form-group">
                  <label htmlFor="exampleInpufullname1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInpufullname1"
                    placeholder="full name"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Type your message</label>
                  <textarea
                    type="text"
                    name="text"
                    value={contact.text}
                    onChange={handleChange}
                    className="form-control"
                    id="message"
                    placeholder="message"
                  />
                </div>
                <button type="submit" className="la btn btn-primary ">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
