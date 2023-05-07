import { Fragment } from "react";
import "./App.css";
import Navs from "./Component/Navs/Navs";
import Home from "./Component/Home/Home";
import {Route, Routes , route} from 'react-router-dom'
import Contact from "./Component/Contact/Contact";
import Prefabriquer from "./Component/Prefabriquer/Prefabriquer";
import Restaurer from "./Component/Restaurer/Restaurer";
import Fabriquer from "./Component/Fabriquer/Fabriquer";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='prefabriquer' element={<Prefabriquer/>} />
        <Route path='restaurer' element={<Restaurer/>} />
        <Route path='fabriquer' element={<Fabriquer/>} />
     
      </Routes>
  );
}

export default App;
 