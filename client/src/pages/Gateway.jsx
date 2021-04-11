import React from "react";

const Gateway = () => {
  
  // fonction pour créer des coeurs animés
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = "⭐";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 9999);

  return (
    <div className="gateway">
      {createHeart}
      <img src="../img/logo.png" alt="" />
      <a href="">Accéder au site</a>
    </div>
  );
};

export default Gateway;
