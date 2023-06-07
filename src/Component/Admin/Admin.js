import React, { useState } from "react";
import "./Admin.css";

import NavAdmin from "../NavAdmin/NavAdmin";
import Sidebar from "../Sidebar/Sidebar";

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="contain">
      <NavAdmin />
      <div className="fabriquer">
        <h1 className="dashboard-title">Bonjour Hiba 👋</h1>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div id="card3">
              <h5 className="dash-titre">Les commandes</h5>
              <p></p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div id="card3">
              <h5 className="dash-titre">Contacts</h5>
              <i></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div id="card3">
              <h5 className="dash-titre">Meubles Fabriques</h5>
              <p></p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div id="card3">
              <h5 className="dash-titre">Meubles Restaures</h5>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Admin;
