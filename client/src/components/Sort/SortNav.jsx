import React from "react";

const SortNav = () => {
//   const sortBtn = document.getElementById("sort-btn");
//   const sortNav = document.getElementById("sort-nav");

//   sortBtn.addEventListener("click", () => {
//     sortNav.classList.toggle("active");
//     sortBtn.classList.toggle("active");
// });

  return (
    <div id="sort-nav">
      <div className="sort-choice-container">
        <h2>Ordre Alphabétique</h2>
        <div className="sort-choice">
          <label>
            <input type="radio" name="choice-radio" />A
          </label>
          <label>
            <input type="radio" name="choice-radio" />Z
          </label>
        </div>
      </div>
      <div className="sort-choice-container">
        <h2>Date de sortie</h2>
        <div className="sort-choice">
          <label>
            <input type="radio" name="choice-radio" />
            New
          </label>
          <label>
            <input type="radio" name="choice-radio" />
            Recent
          </label>
        </div>
      </div>
      <div className="sort-choice-container">
        <h2>Popularité</h2>
        <div className="sort-choice">
          <label>
            <input type="radio" name="choice-radio" />
            Most
          </label>
          <label>
            <input type="radio" name="choice-radio" />
            Flop
          </label>
        </div>
      </div>
    </div>
  );
};

export default SortNav;
