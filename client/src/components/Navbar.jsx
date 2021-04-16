import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "../AppContext";
import AllSign from "./Log/AllSign";
import LogOut from "./Log/LogOut";
import SettingNav from "./SettingNav/SettingNav";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  const [showSetting, setShowSetting] = useState(false);

  return (
    <nav className="nav-bar-container">
      <div className="nav-bar">
        <div className="nav-bar-left">
          {/* <i
            onClick={() => setShowSetting(!showSetting)}
            id="setting-btn"
            class="fas fa-cog"
          ></i>

          {showSetting && <SettingNav />} */}

          <a className="partenaire" target="_blank" href="https://www.themoviedb.org/?language=fr">
            <h2>Notre partenaire</h2>
            <img src="../../img/tmdb2.svg" alt="" />
          </a>

          <a className="nav-back-to-home" href="/home">
            <img src="../img/logo.png" alt="" />
          </a>
        </div>

        <div className="nav-bar-center">
          <input type="text" placeholder="Rechercher..."></input>
        </div>

        {uid ? (
          <div className="nav-bar-right">
            <h2>Bienvenue {userData.pseudo} </h2>
            <NavLink exact to="/profil">
              <img src={userData.picture} alt="" />
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
