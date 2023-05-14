import { Fragment } from "react";
import "./App.css";
import Navs from "./Component/Navs/Navs";
import Home from "./Component/Home/Home";
import { Route, Routes, route } from "react-router-dom";
import Contact from "./Component/Contact/Contact";
import Fabriquer from "./Component/Fabriquer/Fabriquer";
import ArticlePage from "./Component/ArticlePage/ArticlePage";
import NoMatch from "./Component/NoMatch/NoMatch";
import Prefabriquer from "./Component/Prefabriquer/Prefabriquer";
import Restaurer from "./Component/Restaurer/Restaurer";
import Login from "./Component/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="fabriquer" element={<Fabriquer />} />
      <Route path="restaurer" element={<Restaurer />} />
      <Route path="prefabriquer" element={<Prefabriquer />} />
      <Route path="login" element={<Login />} />
      <Route path="prefabriquer/:id" element={<ArticlePage />} />{" "}
      {/*dynamique route*/}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
