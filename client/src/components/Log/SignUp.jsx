import React, { useState } from "react";
import axios from "axios";
import SignIn from "./SignIn";

const SignUp = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    // erreurs qui peuvent être remontées :
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          //           console.log(res);
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const haveAccount = (e) => {
    setFormSubmit(true);
  };

  return (
    <div className="signup">
      {formSubmit ? (
        <>
          <SignIn />
          {/* <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4> */}
        </>
      ) : (
        <div className="sign-up-container">
          <form action="" id="sign-up-in" onSubmit={haveAccount}>
            {/* vous avez un compte */}
            <label htmlFor="compte">Vous avez un compte</label>
            <input type="submit" value="Se connecter" className="btn" />
            <div className="error"></div>
          </form>
          <form action="" onSubmit={handleRegister} id="sign-up-form">
            {/* pseudo */}
            <label htmlFor="pseudo">Pseudo</label>
            <input
              type="text"
              name="pseudo"
              id="pseudo"
              onChange={(e) => setPseudo(e.target.value)}
              value={pseudo}
            />
            <div className="pseudo error"></div>

            {/* email */}
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="email error"></div>

            {/* password */}
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="password error"></div>

            {/* password confirmation */}
            <label htmlFor="password-conf">Confirmer mot de passe</label>
            <input
              type="password"
              name="password"
              id="password-conf"
              onChange={(e) => setControlPassword(e.target.value)}
              value={controlPassword}
            />
            <div className="password-confirm error"></div>

            {/* CGU checkbox */}
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              J'accepte les{" "}
              <a href="/cgu" target="_blank" rel="noopener noreferrer">
                conditions générales
              </a>
            </label>

            {/* erreur si pas coché */}
            <div className="terms error"></div>

            {/* valider inscription */}
            <input className="btn" type="submit" value="Valider inscription" />
          </form>
          {/* <a href="/home" className="back-home">
            <i class="far fa-times-circle"></i>
          </a> */}
          <div />
        </div>
      )}
    </div>
  );
};

export default SignUp;
