import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "../AppContext";
import AllSign from "./Log/AllSign";
import LogOut from "./Log/LogOut";
import SortNav from "./Sort/SortNav";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  const [showSort, setShowSort] = useState(false);

  const handleSort = () => {
    setShowSort(true);
  };

  return (
    <nav className="nav-bar-container">
      <div className="nav-bar">
        <h2 onClick={handleSort} id="sort-btn">
          Trier
        </h2>
        {showSort ? <SortNav /> : null}
        <img src="../img/logo.png" alt="" />
        <input type="text" placeholder="Rechercher..."></input>

        {uid ? (
          <div className="nav-bar-welcome">
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
