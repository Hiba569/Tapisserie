import React from "react";
import { useNavigate } from "react-router-dom";
import "./NoMatch.css";
import Navs from "../Navs/Navs";
import Footer from "../Footer/Footer";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <>
   
        <Navs />
        <div className="back"></div>
        <div className="match container">
          <h1 className="error">404</h1>
          <p className="para">Whoops... page non trouvée 😔 </p>
          <button
            onClick={() => navigate("/")}
            className="btn btn-outline-success"
            id="succes"
          >
            Retour a l'accueil
          </button>
        </div>
        <Footer />
  
    </>
  );
};

export default NoMatch;
