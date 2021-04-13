import React from "react";
import { useSelector } from "react-redux";


const LittleCard = () => {

  const movieData = useSelector((state) => state.moviesReducer);

  return (
    <div className="little_card">
        <h2>container</h2>
        <div className="card-container">
          <div className="card-poster">
          <img src={movieData.poster_path} alt="" />
          </div>
          <div className="card-title">
            
          </div>
          <div className="card-synopsis">
            
          </div>
        </div>
    </div>
  );
};

export default LittleCard;
