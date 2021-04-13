import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions/movies.actions";
import LittleCard from "./Cards/LittleCard";
import { isEmpty } from "./Utils";

const Thread = () => {
  const [loadMovie, setLoadMovie] = useState(true);

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesReducer);

  useEffect(() => {
    if (loadMovie) {
      dispatch(getMovies());
      setLoadMovie(false);
      console.log(movies);
    }
  }, [loadMovie, dispatch]);


 
  return (
    <div className="thread-container">
      <h2>Liste de films</h2>
      {!isEmpty(movies[0]) &&
        movies.map(() => {
          return <LittleCard />;
        })}
    </div>
  );
};

export default Thread;
