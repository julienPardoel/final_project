import React, { useState } from "react";
import BigCard from "./BigCard";

// import BigCard from "./BigCard";

const LittleCard = ({ movie }) => {
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
          <div className="card-synopsis">{overview}...</div>
          <div className="card-comment-icon">
            <i
              class="fas fa-comments"
              onClick={() => setShowComments(!showComments)}
            ></i>
          </div>
          {showComments && <BigCard movie={movie._id} />}
        </div>
      </div>
    </div>
  );
};

export default LittleCard;
