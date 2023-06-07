import React from 'react'
import './NavAdmin.css'
import { images } from "../../Constants";
import {
    AiOutlineBars,
    AiOutlineSearch,
    
  } from "react-icons/ai";

const NavAdmin = ({sidebarOpen , openSidebar}) => {
  return (
    
      <nav className="nab ">
        <div className="nav_icon" onClick={() => openSidebar()}>
          <i>
            <AiOutlineBars />
          </i>
        </div>
        <div className="navbar__left">
          <a className="active_link" href="#">
            {" "}
            Admin
          </a>
        </div>
        <div className="navbar__right">
          <a href="#">
            <i>
              <AiOutlineSearch />
            </i>
          </a>
          <a href="#">
            <img width={30} src={images.avatar} alt="avatar" />
          </a>
        </div>
      </nav>
    
  )
}

export default NavAdmin
