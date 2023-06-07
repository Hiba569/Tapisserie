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
      <NavAdmin sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <h1 className="dashboard-title">Dashboard</h1>

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Admin;
