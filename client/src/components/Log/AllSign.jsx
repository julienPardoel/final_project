import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Log = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpBurger, setSignUpBurger] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  const handleBurger = (e) => {
    setSignUpBurger(true);
  };

  return (
    <div className="all-sign-container">
      <div className="all-sign-list">
        <ul>
          <li onClick={handleModals} id="register">
            S'inscrire
          </li>
          <li onClick={handleModals} id="login">
            Se connecter
          </li>
        </ul>
        {signUpModal && <SignUp />}
        {signInModal && <SignIn />}
      </div>

      <div className="all-sign-burger">
        <i class="fas fa-bars" onClick={handleBurger}></i>
      </div>
      {signUpBurger && <SignUp />}
    </div>
  );
};

export default Log;
