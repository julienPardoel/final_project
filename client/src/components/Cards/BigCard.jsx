import React from "react";

import Comments from "./Comments";

const BigCard = (movie) => {
  return (
    <div className="big-card-container">
      <div className="bc-close">
        <i class="fas fa-times"></i>
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
            <div className="card-title-vote">
              <div className="card-title">
                <h2>{movie.title}</h2>
              </div>
              <div className="card-vote">
                <p>{movie.vote_average}⭐</p>
              </div>
            </div>
            <div className="card-date">
              <p>Date de sortie: {movie.release_date}</p>
            </div>
            <div className="card-synopsis">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
        <div className="bc-comments">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
