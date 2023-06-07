import React, { useState, useEffect } from "react";
import NavAdmin from "../NavAdmin/NavAdmin";
import "./ManagArticle.css";
import Sidebar from "../Sidebar/Sidebar";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../../firebase";
import { FcDeleteDatabase, FcEditImage } from "react-icons/fc";

const ManagArticle = () => {
  const [form, setForm] = useState({
    titre: "",
    categorie: "",
    sousCategorie: "",
    prix: "",
    prixAvant: "",
    longueur: "",
    largeur: "",
    hauteur: "",
    couleur: "",
    finitions: "",
    material: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
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
      const imageRef = ref(storage, `Articles/${fileName}`);

      await uploadBytes(imageRef, imageUpload);

      const downloadURL = await getDownloadURL(imageRef);

      const docRef = await addDoc(collection(db, "ArticleInfo"), {
        titre: form.titre,
        categorie: form.categorie,
        sousCategorie: form.sousCategorie,
        prix: form.prix,
        prixAvant: form.prixAvant,
        longueur: form.longueur,
        largeur: form.largeur,
        hauteur: form.hauteur,
        couleur: form.couleur,
        finitions: form.finitions,
        material: form.material,
        imageURL: downloadURL, // Add the download URL to the document
      });
      await fetchData();
      console.log("Document written with ID: ", docRef.id);
      alert("L'article a été ajouté");
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

  //fetch data from firebase
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "ArticleInfo"));
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });

    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //delete data
  const deleteImage = async (articleId, imageURL) => {
    try {
      // Delete the document from Firestore
      await deleteDoc(doc(db, "ArticleInfo", articleId));

      // Delete the image from storage
      const imageRef = ref(storage, imageURL);
      await deleteObject(imageRef);

      // Fetch the updated data from Firestore
      fetchData();

      console.log("Document and image deleted successfully");
    } catch (error) {
      console.error("Error deleting document or image: ", error);
    }
  };

  return (
    <>
      <div className="contain ">
        <NavAdmin />
        <div className="row ">
          <div className="col">
            {" "}
            <h1 className="titre">Ajouter un article</h1>
            <form className="article" onSubmit={uploaFile}>
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
                  <h3>
                    {selectedFileName ? selectedFileName : "Select image"}
                  </h3>
                </div>
              </div>
              <div className="details">
                <div className="form-group">
                  <input
                    className="custom-input"
                    name="titre"
                    placeholder="titre"
                    type="text"
                    value={form.titre}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="custom-input"
                    name="categorie"
                    placeholder="categorie"
                    type="text"
                    value={form.categorie}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="custom-input"
                    name="sousCategorie"
                    placeholder="sous-categorie"
                    type="text"
                    value={form.sousCategorie}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="custom-input"
                    name="prix"
                    placeholder="prix"
                    type="number"
                    value={form.prix}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="custom-input"
                    name="prixAvant"
                    placeholder="prix Avant"
                    type="number"
                    value={form.prixAvant}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="custom-input"
                    name="longueur"
                    placeholder="longueur"
                    type="number"
                    value={form.longueur}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="custom-input"
                    name="largeur"
                    placeholder="largeur"
                    type="number"
                    value={form.largeur}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="custom-input"
                    name="hauteur"
                    placeholder="hauteur"
                    type="number"
                    value={form.hauteur}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="custom-input"
                    name="couleur"
                    placeholder="couleur"
                    type="text"
                    value={form.couleur}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="custom-input"
                    name="finitions"
                    placeholder="finitions"
                    type="text"
                    value={form.finitions}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="custom-input"
                    name="material"
                    placeholder="Material"
                    type="text"
                    value={form.material}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" id="btn" className=" btn btn-primary">
                Ajouter l'article
              </button>{" "}
            </form>
          </div>
          <div className="col">
            <h1 className="titre">Tableau des articles</h1>

            <table className="table table-bordered">
              <thead>
                <tr id="th">
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((article) => (
                  <tr key={article.id}>
                    <td className="center">
                      <img
                        src={article.imageURL}
                        alt={article.titre}
                        className="miniature-image"
                      />
                    </td>
                    <td>
                      <i className="action">
                        <FcEditImage />
                      </i>
                      <i
                        className="action"
                        onClick={() =>
                          deleteImage(article.id, article.imageURL)
                        }
                      >
                        <FcDeleteDatabase />
                      </i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Sidebar />
      </div>
    </>
  );
};

export default ManagArticle;
