import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesTop } from "../actions/movies.actions";
import { getMoviesPop } from "../actions/movies.actions";
import LittleCard from "./Cards/LittleCard";
import axios from "axios";

import { isEmpty } from "./Utils";

const Thread = () => {
  // etat de la page au chargement
  const [loadMovieTop, setLoadMovieTop] = useState(false);
  const [loadMoviePop, setLoadMoviePop] = useState(true);
  const [loadMovieSearch, setLoadMovieSearch] = useState("");
  // dispatch les differents elements
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.moviesReducer);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (loadMovieTop) {
      dispatch(getMoviesTop());
    }
  }, [loadMovieTop, dispatch]);

  useEffect(() => {
    if (loadMoviePop) {
      dispatch(getMoviesPop());
    }
  }, [loadMoviePop, dispatch]);

  useEffect(() => {
    if (loadMovieSearch) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=fd4d4bf6cf58ba27b154b5975554d16a&query=${loadMovieSearch}&language=fr`
        )
        .then((res) => setMovies(res.data.results));
    }
  }, [loadMovieSearch]);

 

  const handleMovie = (e) => {
    if (e.target.id === "pop") {
      setLoadMovieTop(false);
      setLoadMoviePop(true);
      setLoadMovieSearch("");
      
    } else if (e.target.id === "top") {
      setLoadMoviePop(false);
      setLoadMovieTop(true);
      setLoadMovieSearch("");
      
    } else if (e.target.id === "input") {
      setLoadMoviePop(false);
      setLoadMovieTop(false);
    }
  };
  return (
    <div className="thread">
      <div className="thread-selector">
        <div className="t-s-pop">
          <h2 onClick={handleMovie} id="pop">
            Les plus populaires
          </h2>
          {loadMoviePop && <i class="fas fa-caret-down"></i>}
        </div>

        <div className="t-s-top">
          <h2 onClick={handleMovie} id="top">
            Les mieux notés
          </h2>
          {loadMovieTop && <i class="fas fa-caret-down"></i>}
        </div>

        <div className="t-s-search">
          <form action="">
            <input
              id="input"
              autoComplete="off"
              placeholder="Entrez un film"
              type="text"
              defaultValue=""
              onChange={(e) => setLoadMovieSearch(e.target.value)}
            />
          </form>
          {loadMovieSearch && <i class="fas fa-caret-down"></i>}
        </div>
      </div>
      <div className="thread-container">
        {loadMovieSearch !== "" &&
          movies.map((movie) => <LittleCard movie={movie} />)}
        {!isEmpty(moviesData[0]) &&
          moviesData.map((movie) => {
            return <LittleCard movie={movie} />;
          })}
      </div>
    </div>
  );
};

export default Thread;
