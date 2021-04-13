import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions/movies.actions";
import LittleCard from "./Cards/LittleCard";
import { isEmpty } from "./Utils";

const Thread = () => {
  const [loadMovie, setLoadMovie] = useState(true);

  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.moviesReducer);


  useEffect(() => {
    if (loadMovie) {
      dispatch(getMovies());
      setLoadMovie(false);
    }
  }, [loadMovie, dispatch]);

  return (
    <div className="thread-container">
      
      {!isEmpty(moviesData[0]) &&
        moviesData.map((movie) => {
          return <LittleCard movie={movie}/>;
        })}
        
    </div>
  );
};

export default Thread;
