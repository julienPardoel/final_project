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
        <div className="nav-bar-left">
          <a
            className="partenaire"
            target="_blank"
            rel="noreferrer"
            href="https://www.themoviedb.org/?language=fr"
          >
            <h2>Notre partenaire</h2>
            <img src="../../img/tmdb2.svg" alt="" />
          </a>

          <a className="nav-back-to-home" href="/home">
            <img src="../img/logo.png" alt="" />
          </a>
        </div>
        <div className="nav-bar-center">
          {uid ? (
            <h2>Bienvenue {userData.pseudo} </h2>
          ) : (
            <h2>Bienvenue Visiteur</h2>
          )}
        </div>
        {uid ? (
          <div className="nav-bar-right">
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
