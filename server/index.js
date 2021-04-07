// express : framework qui fournit des fonctionnalités
const express = require("express");

// moongoose = pour la connexion à la base de données
const mongoose = require("mongoose");

// on defini que la variable app utilisera express
const app = express();

// connection avec la base de donnée
// utilisation d'une variable d'environement > sécurité
mongoose.connect(
  "mongodb+srv://" +
    process.env.DB_USER_PASS +
    "@cluster0.tfs3m.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

// envoi de la db vers une adresse sur une app locale
// utilisation d'une variable d'environement > sécurité
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
