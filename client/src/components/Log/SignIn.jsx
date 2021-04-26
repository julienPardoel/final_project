import React, { useState } from "react";
import axios from "axios";
// on importe les variables d'environnement stockées dans le fichier .env
require("dotenv").config({ path: ".../env" });

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/home";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signin">
      <form action="" onSubmit={handleLogin}>
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

        {/* envoyer */}
        <input className="btn" type="submit" value="Se connecter" />
      </form>
      <a href="/home" className="back-home">
        <i class="far fa-times-circle"></i>
      </a>
    </div>
  );
};

export default SignIn;
