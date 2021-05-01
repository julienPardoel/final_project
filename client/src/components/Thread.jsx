import React, { useEffect, useState } from "react";
import LittleCard from "./Cards/LittleCard";
import axios from "axios";

const Thread = () => {
  // etat de la page au chargement
  const [loadMovieTop, setLoadMovieTop] = useState(false);
  const [loadMoviePop, setLoadMoviePop] = useState(true);
  const [loadMovieSearch, setLoadMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);

  // infinite scroll
  // const loadMore = () => {
  //   let endpoint = '';
  //       setLoading(true)
  //       console.log('CurrentPage', CurrentPage)
  //       endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
  //       fetchMovies(endpoint);
  // }

  // les plus populaires
  useEffect(() => {
    if (loadMoviePop) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY_API}&language=fr&page=1`
        )
        .then((res) => setMovies(res.data.results));
    }
    // infinite scroll
    // window.addEventListener("scroll", loadMore);
    // return () => window.removeEventListener("scroll", loadMore);

  }, [loadMoviePop]);

  // les mieux notés
  useEffect(() => {
    if (loadMovieTop) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY_API}&language=fr&page=1`
        )
        .then((res) => setMovies(res.data.results));
    }
  }, [loadMovieTop]);

  // recherche
  useEffect(() => {
    if (loadMovieSearch) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY_API}&query=${loadMovieSearch}&language=fr`
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
