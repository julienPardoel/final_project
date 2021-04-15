import React from "react";

const SortNav = () => {
  return (
    <div id="setting-nav">
      <div className="popular">
        <h2>Les plus populaires</h2>
      </div>
      <div className="top-vote">
        <h2>Les mieux notés</h2>
      </div>
      <div className="partenaire">
        <h2>Notre partenaire</h2>
        <img src="../../img/tmdb2.svg" alt="" />
      </div>
      <div className="a-propos">
        <h2>A propos</h2>
      </div>
    </div>
  );
};

export default SortNav;
