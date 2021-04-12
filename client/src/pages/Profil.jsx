import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../actions/user.actions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    <div>
      <Navbar />
      <div className="profil-container">
        {/* image */}
        <img src={userData.picture} alt="" />
        <form action="" onSubmit={handlePicture} className="upload-pic">
          <label htmlFor="file">Changer d'image</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <input type="submit" value="Envoyer" />
        </form>
        {/* pseudo */}
        <h2>{userData.pseudo}</h2>
        {/* email */}
        <h2>{userData.email}</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;
