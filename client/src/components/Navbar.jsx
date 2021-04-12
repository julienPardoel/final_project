import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "../AppContext";
import AllSign from "./Log/AllSign";
import LogOut from "./Log/LogOut";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav className="nav-bar-container">
      <div className="nav-bar">
        <h2>Trier</h2>
        <img src="../img/logo.png" alt="" />
        <input type="text" placeholder="Rechercher..."></input>

        {uid ? (
          <div className="nav-bar-welcome">
            <NavLink exact to="/profil">
              <h2>Bienvenue {userData.pseudo}</h2>
            </NavLink>

            <LogOut />
          </div>
        ) : (
          <div>
            <AllSign />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
