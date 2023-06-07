import React from "react";
import "./Sidebar.css";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiArticleLine, RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineBuild, MdOutlinePermContactCalendar } from "react-icons/md";
import { images } from "../../Constants";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        redirectToAccueil();
        console.log("successfully logged out");
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const redirectToAccueil = () => {
    navigate("/");
  };
  return (
    <>
      <div id="sidebar" className={sidebarOpen ? "sidebar-responsive " : ""}>
        <div className="sidebar__title">
          <div className="sidebar__ig">
            <img width={80} src={images.avatar} />
           
          </div>
        </div>
        <div className="sidebar__menu">
          <div className="sidebar__link active_menu_link">
            <i>
              <AiOutlineHome />
            </i>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <br />

          <div className="sidebar__Link">
            <i>
              <RiArticleLine />
            </i>
            <Link to="/managArticle">gestion des articles</Link>
          </div>
          <div className="sidebar__Link">
            <i>
              <AiOutlineShoppingCart />
            </i>
            <Link to="/managCmd">gestion des commandes</Link>
          </div>

          <div className="sidebar__Link">
            <i>
              <MdOutlineBuild />
            </i>
            <Link to="/managFab">gestion de fabrication et Restauration</Link>
          </div>
          <div className="sidebar__Link">
            <i>
              <MdOutlinePermContactCalendar />
            </i>
            <Link to="/contactAdmin">Contact</Link>
          </div>
          <div className="sidebar__logout">
            <i>
              <RiLogoutBoxLine />
            </i>
            <Link href="#" onClick={handleSignOut}>
              log out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
