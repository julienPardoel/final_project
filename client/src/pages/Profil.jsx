import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../actions/user.actions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { dateParser } from "../components/Utils";

const Profil = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", file);

    dispatch(uploadPicture(data, userData._id));
  };

  return (
    <div className="profil">
      <Navbar />
      <div className="profil-container">
        {/* pseudo */}
        <p>Bienvenue sur votre profil</p>
        <h2 className="profil-pseudo">{userData.pseudo}</h2>
        {/* date d'inscription */}
        <h3 className="profil-date">Membre depuis le : {dateParser(userData.createdAt)}</h3>
        {/* photo de profil */}
        <img className="profil-picture" src={userData.picture} alt="" />
        {/* formulaire changement photo de profil */}
        <form
          action=""
          onSubmit={handlePicture}
          className="profil-picture-upload"
        >
          <label htmlFor="file">Changer votre photo de profil</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input className="btn-send" type="submit" value="Envoyer" />
        </form>
        {/* lien vers un reour à l'accueil */}
        <a className="back-to-home" href="/home">
          <i class="fas fa-home"></i>
        </a>
        <p>Retour à l'accueil</p>
      </div>

      <Footer />
    </div>
  );
};

export default Profil;
