import React from 'react'

const Cgu = () => {

      // fonction pour créer des coeurs animés
  function createStar() {
    const star = document.createElement("div");
    star.classList.add("cgu-star");

    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 2 + 3 + "s";

    star.innerText = "⭐";

    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 5000);
  }

  setInterval(createStar, 1500);


    return (
        <div className="cgu">
            {createStar}
            <h2>Sans conditions</h2>
            <p>Vous pouver fermer cet onglet et continuer à utiliser le site</p>
            {/* <a href="javascript:window.close();">Fermer la fenêtre</a> */}
        </div>
    )
}

export default Cgu
