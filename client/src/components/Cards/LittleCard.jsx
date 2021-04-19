import React, { useState, useContext } from "react";
import { UidContext } from "../../AppContext";
import BigCard from "./BigCard";
// import { isEmpty } from "../Utils";

const LittleCard = ({ movie }) => {
  const uid = useContext(UidContext);
  
  // limite le nombre de caracteres dans le synopsis de la card
  const str = movie.overview;
  const overview = str.substr(0, 150);

  const [showComments, setShowComments] = useState(false);

  return (
    <div className="little-card">
      <div className="card-container">
        <div className="card-poster">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="card-details">
          <div className="card-title-vote">
            <div className="card-title">{movie.title}</div>
            <div className="card-vote">⭐{movie.vote_average}</div>
          </div>
          <div className="card-date">Date de sortie: {movie.release_date}</div>
          <p className="card-synopsis">{overview}...</p>
          {uid ? (
            <div className="card-comment-icon">
              <i
                class="fas fa-comments"
                onClick={() => setShowComments(!showComments)}
              ></i>
            </div>
          ) : (
            <div className="no-comment">
              <p>Pour accéder aux commentaires veuillez vous connecter</p>
            </div>
          )}
          {showComments && <BigCard movie={movie}/>}
        </div>
      </div>
    </div>
  );
};

export default LittleCard;
