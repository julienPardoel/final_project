import React, { useContext } from "react";
import { UidContext } from "../AppContext";
import AllSign from "./Log/AllSign";


const Navbar = () => {
  const uid = useContext(UidContext);

  return (
    <nav>
      <div>
        <h2>Trier</h2>
        <img src="../img/logo.png" alt="" />
        <input type="text" placeholder="Rechercher..."></input>

        {uid ? (
            <div>
                <h2>Bienvenue User</h2>
                <h2>logout</h2>
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
