import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import Fabriquer from "./Component/Fabriquer/Fabriquer";
import Restaurer from "./Component/Restaurer/Restaurer";
import Prefabriquer from "./Component/Prefabriquer/Prefabriquer";
import ArticlePage from "./Component/ArticlePage/ArticlePage";
import Login from "./Component/Login/Login";
import Admin from "./Component/Admin/Admin";
import NoMatch from "./Component/NoMatch/NoMatch";
import ManagArticle from "./Component/ManagArticle/ManagArticle";
import MangCmd from "./Component/ManagCmd/MangCmd";
import ManagFabr from "./Component/ManagFabr/ManagFabr";
import ContactAdmin from "./Component/ContactAdmin/ContactAdmin";

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="fabriquer" element={<Fabriquer />} />
      <Route path="restaurer" element={<Restaurer />} />
      <Route path="prefabriquer" element={<Prefabriquer />} />
      <Route path="prefabriquer/:prefabriquerId" element={<ArticlePage />} />
      <Route path="secret" element={<Login />} />
      <Route path="managArticle" element={<ManagArticle />} />
      <Route path="managCmd" element={<MangCmd />} />
      <Route path="managFab" element={<ManagFabr />} />
      <Route path="contactAdmin" element={<ContactAdmin />} />
      <Route path="dashboard" element={<Admin />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
