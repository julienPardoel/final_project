import React from "react";
import axios from "axios";

// permet de supprimer le cookie en front
import cookie from "js-cookie";

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    // sert à revenir à la page d'accueil :
    window.location = "/home";
  };

  return (
    <div onClick={logout} className="logout">
        <i class="fas fa-sign-out-alt"></i>
    </div>
  );
};

export default Logout;