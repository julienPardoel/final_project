import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesTop } from "../actions/movies.actions";
import { getMoviesPop } from "../actions/movies.actions";
import LittleCard from "./Cards/LittleCard";

import { isEmpty } from "./Utils";

const Thread = () => {
  const [loadMovieTop, setLoadMovieTop] = useState(true);
  const [loadMoviePop, setLoadMoviePop] = useState(true);

  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.moviesReducer);

  useEffect(() => {
    if (loadMovieTop) {
      dispatch(getMoviesTop());
      // setLoadMovieTop(false);
    }
  }, [loadMovieTop, dispatch]);

  useEffect(() => {
    if (loadMoviePop) {
      dispatch(getMoviesPop());
      // setLoadMoviePop(false);
    }
  }, [loadMoviePop, dispatch]);

  const handleMovie = (e) => {
    if (e.target.id === "pop") {
      setLoadMovieTop(false);
      setLoadMoviePop(true);
    } else if (e.target.id === "top") {
      setLoadMoviePop(false);
      setLoadMovieTop(true);
    }
  };
  return (
    <div>
      <div className="thread-selector">
        <div className="t-s-left">
          <h2 onClick={handleMovie} id="pop">
            Les plus populaires
          </h2>
          {loadMoviePop && <i class="fas fa-caret-down"></i>}
        </div>
        <div className="t-s-right">
          <h2 onClick={handleMovie} id="top">
            Les mieux notés
          </h2>
          {loadMovieTop && <i class="fas fa-caret-down"></i>}
        </div>
      </div>
      <div className="thread-container">
        {!isEmpty(moviesData[0]) &&
          moviesData.map((movie) => {
            return <LittleCard movie={movie} />;
          })}
      </div>
    </div>
  );
};

export default Thread;
