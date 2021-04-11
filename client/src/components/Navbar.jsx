import React, { useContext } from "react";
import { UidContext } from "../AppContext";
import AllSign from "./Log/AllSign";
import LogOut from "./Log/LogOut";


const Navbar = () => {
  const uid = useContext(UidContext);

  return (
    <nav className="nav-bar-container">
      <div className="nav-bar">
        <h2>Trier</h2>
        <img src="../img/logo.png" alt="" />
        <input type="text" placeholder="Rechercher..."></input>

        {uid ? (
            <div>
                <h2>Bienvenue User</h2>
                <LogOut/>
            </div>
        ) : (
            <div>
                <AllSign/>
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
