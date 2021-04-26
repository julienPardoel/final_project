import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LittleCard from "./Cards/LittleCard";
import axios from "axios";

const Thread = () => {
  // etat de la page au chargement
  const [loadMovieTop, setLoadMovieTop] = useState(false);
  const [loadMoviePop, setLoadMoviePop] = useState(true);
  const [loadMovieSearch, setLoadMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);

  // const [CurrentPage, setCurrentPage] = useState(0)

  // infinite scroll populaires
  // const loadMore = () => {
  //   let endpoint ='';
  //     setLoadMoviePop(true);
  //     endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=fd4d4bf6cf58ba27b154b5975554d16a&language=en-US&page=${CurrentPage + 1}`;
  // }

  // les mieux notés
  useEffect(() => {
    if (loadMovieTop) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=fd4d4bf6cf58ba27b154b5975554d16a&language=fr`
        )
        .then((res) => setMovies(res.data.results));
    }
  }, [loadMovieTop]);

  // les plus populaires
  useEffect(() => {
    if (loadMoviePop) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=fd4d4bf6cf58ba27b154b5975554d16a&language=fr`
        )
        .then((res) => setMovies(res.data.results));
    }
    // infinite scroll
    // window.addEventListener('scroll', loadMore);
    // return () => window.removeEventListener('scroll', loadMore);
  }, [loadMoviePop]);

  // recherche
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
      {/* barre de recherche */}
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

      {/* liste des films */}
      <div className="thread-container">
        {loadMovieSearch !== "" &&
          movies.map((movie) => <LittleCard movie={movie} />)}
        {loadMoviePop === true &&
          movies.map((movie) => <LittleCard movie={movie} />)}
        {loadMovieTop === true &&
          movies.map((movie) => <LittleCard movie={movie} />)}
      </div>
    </div>
  );
};

export default Thread;
