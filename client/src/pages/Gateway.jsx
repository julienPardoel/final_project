import React from "react";

const Gateway = () => {
  
  // fonction pour créer des coeurs animés
  function createStars() {
    const stars = document.createElement("div");
    stars.classList.add("stars");

    stars.style.left = Math.random() * 100 + "vw";
    stars.style.animationDuration = Math.random() * 2 + 3 + "s";

    stars.innerText = "⭐";

    document.body.appendChild(stars);

    setTimeout(() => {
      stars.remove();
    }, 5000);
  }

  setInterval(createStars, 1500);

  return (
    <div className="gateway">
      {createStars}
      <img src="../img/logo.png" alt="" />
      <a href="http://localhost:3000/home">Accéder au site</a>
    </div>
  );
};

export default Gateway;
