import React, { useState } from "react";
import Comments from "./Comments";

const BigCard = (props) => {
  const [movie] = useState(props.movie);

  return (
    <div className="big-card-container">
      <div className="bc-close">
        <a href="/home">
          <i class="fas fa-times"></i>
        </a>
      </div>
      <div className="big-card">
        <div className="bc-movie">
          <div className="bc-movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="bc-movie-details">
            <div className="bc-title-vote">
              <div className="bc-title">
                <h2>{movie.title}</h2>
              </div>
              <div className="bc-vote">
                <p>{movie.vote_average}⭐</p>
              </div>
            </div>
            <div className="bc-date">
              <p>Date de sortie: {movie.release_date}</p>
            </div>
            <div className="bc-synopsis">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
        <div className="bc-comments">
          <Comments movieId={movie.id} />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
