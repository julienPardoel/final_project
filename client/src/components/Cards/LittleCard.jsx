import React from "react";
import { useSelector } from "react-redux";


const LittleCard = () => {

  const moviesData = useSelector((state) => state.moviesReducer);

  return (
    <div className="little-card">
        <div className="card-container">
          <div className="card-poster">
          <img src={moviesData.poster_path} alt="" />
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
