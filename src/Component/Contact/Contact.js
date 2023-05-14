import React from "react";
import Navs from "../Navs/Navs";
import Footer from "../Footer/Footer";
import "./Contact.css";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
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
              <div className="email">
                <h3>Email</h3>
                <p>tapisserieReve@gmail.com </p>
              </div>
            </div>
            <div className="col col-md-6">
              <form className="formulaire">
                <h2>Send Message</h2>
                <div className="form-group">
                  <label htmlFor="exampleInpufullname1">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInpufullname1"
                    placeholder="full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Type your message</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder="text"
                  />
                </div>
                <button type="submit" className="btn btn-primary la">
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
