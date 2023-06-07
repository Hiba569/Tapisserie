import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navs from "../Navs/Navs";
import "./Prefabriquer.css";
import Footer from "../Footer/Footer";
import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Prefabriquer = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const querySnapshot = await getDocs(collection(db, "ArticleInfo"));
      const items = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        items.push(data.imageURL);
      });

      setImageUrls(items);
    };

    fetchImageUrls();
  }, []);

  return (
    <>
      <Navs />
      <div className="bg w-100">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <h1 className="text-capitalize py-1 redressed bg-desc">
                Notre sélection de meubles
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyy">
        <div className="container">
          <hr className="ligne" />
          <h3>Élevez votre espace de vie avec nos magnifiques meubles</h3>
          <div className="row">
            {imageUrls.map((url, index) => (
              <article className="col-md-4" key={index}>
                <div className="box">
                  <Link to={`/prefabriquer/${index}`}>
                    <div className="image-container">
                      <img
                        src={url}
                        alt={`Image ${index + 1}`}
                        style={{ width: "700px", height: "500px" }}
                      />
                      <div className="overlay">
                        <span>View</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Prefabriquer;
