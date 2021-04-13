import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils";

const LittleCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  const moviesData = useSelector((state) => state.moviesReducer);

  useEffect(() => {
    !isEmpty(moviesData[0]) && setIsLoading(false);
  }, [moviesData]);

  return (
    <div className="little_card" key={movie._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <div className="card-container">
          <h2>container</h2>
          <div className="card-poster">
            <h3>poster</h3>
            <img
              src={
                !isEmpty(moviesData[0]) &&
                moviesData
                  .map((movie) => {
                    return movie.poster_path;
                  })
                  .join("")
              }
              alt=""
            />
          </div>
          <div className="card-title">
            <h3>title</h3>
          </div>
          <div className="card-synopsis">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              aliquid, iste nihil repellendus cum cupiditate, quidem sapiente
              excepturi inventore, amet praesentium. Totam maiores repellat
              nobis ex nihil adipisci obcaecati aspernatur.
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default LittleCard;
