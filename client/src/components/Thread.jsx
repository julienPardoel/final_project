import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesTop } from "../actions/movies.actions";
import { getMoviesPop } from "../actions/movies.actions";
import LittleCard from "./Cards/LittleCard";
import axios from "axios";

import { isEmpty } from "./Utils";

const Thread = () => {
  const [loadMovieTop, setLoadMovieTop] = useState(true);
  const [loadMoviePop, setLoadMoviePop] = useState(true);
  const [loadMovieSearch, setLoadMovieSearch] = useState("");

  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.moviesReducer);
  const [movies, setMovies] = useState([]);

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

  useEffect(() => {
    console.log(movies.length);
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
    } else if (e.target.id === "top") {
      setLoadMoviePop(false);
      setLoadMovieTop(true);
    }
  };
  return (
    <div>
      <div className="thread-selector">

        <div className="t-s-pop">
          <h2 onClick={handleMovie} id="pop">
            Les plus populaires
          </h2>
          {/* {loadMoviePop && <i class="fas fa-caret-down"></i>} */}
        </div>

        <div className="t-s-top">
          <h2 onClick={handleMovie} id="top">
            Les mieux notés
          </h2>
          {/* {loadMovieTop && <i class="fas fa-caret-down"></i>} */}
        </div>

        <div className="t-s-search">
          <form action="">
            <input
              placeholder="Entrez un film"
              type="text"
              defaultValue=""
              onChange={(e) => setLoadMovieSearch(e.target.value)}
            />
          </form>
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
