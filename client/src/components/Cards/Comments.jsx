import React, { useState, useEffect } from "react";
import axios from "axios";
import { dateParser } from "../../components/Utils";

const Comments = ({ movieId }) => {
  // ------ envoi des données du formulaire ------

  // je récupère l'id du film => ok
  const movie = movieId;
  console.log(movie);

  // je recupère la valeur de mon message => ok
  const [message, setMessage] = useState("");
  console.log(message);

  // je récupère l'utilisateur => ok
  const [commenter, setCommenter] = useState("");
  console.log(commenter);

  // ------ fin

  // ------récupération et affichage des commentaires ------

  // je récupère l'ensemble des commentaires => ok
  const [comment, setComment] = useState([]);
  console.log(comment);

  // je récupère l'ensemble des utilisateurs => ok
  const [data, setData] = useState([]);
  console.log(data);

  // ------ fin

  // ------ fonctions ------

  // fonction envoi du formulaire => not ok
  const handleComment = async (e) => {
    e.preventDefault();
    axios({
      methode: "post",
      url: `${process.env.REACT_APP_API_URL}api/comments/${movieId}`,
      data: {
        movieId: movie,
        commenter: commenter._id,
        message: message,
      },
    });
  };

  // fonction récupération des commentaires du film => ok
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/comments/${movieId}`)
      .then((res) => {
        setComment(res.data);
      });
  }, []);

  // fonction récupération de tout les utilisateurs => ok
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}api/user/all`).then((res) => {
      setData(res.data);
    });
  }, []);

  // fonction récupération d'un seul utilisateur => ok
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/user/`, {
        withCredentials: true,
      })
      .then((res) => {
        setCommenter(res.data);
      });
  }, []);

  // ------ fin

  // on retourne :

  return (
    <div className="comments-container">
      {/* fil des messages */}
      <div className="comments-thread-container">
        {/* on map les commentaires */}
        {comment.map((comment) => (
          <div className="comments-thread" comment={comment}>
            {/* photo du profil qui a commenter */}
            <div className="comments-picture">
              {/* on map les utilisateurs, si l'id de l'utilisateur est egal à l'id du commenter alors on retourne la photo de profil */}
              <img
                src={data
                  .map((user) => {
                    if (user._id === comment.commenter) return user.picture;
                  })
                  .join("")}
                alt=""
              />
            </div>
            <div className="comments-details">
              {/* pseudo du profil qui a commenter */}
              <div className="comments-pseudo">
                {/* on map les utilisateurs, si l'id d'un utilisateur est egal à celui du commenter alors on retourne son pseudo */}
                {data.map((user) => {
                  if (user._id === comment.commenter) return user.pseudo;
                })}
              </div>
              {/* message posté */}
              <div className="comments-message">{comment.message}</div>
              {/* date et heure du message */}
              <div className="comments-date">
                Message posté {dateParser(comment.createdAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* formulaire d'envoi des messages */}
      <div className="comments-form">
        <form
          onSubmit={handleComment}
          // enctype="application/json"
        >
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            name=""
            className="input-message"
          />
          <input
            className="input-btn"
            type="submit"
            value="Send !"
            disabled={!setMessage}
          />
        </form>
      </div>
    </div>
  );
};

export default Comments;
