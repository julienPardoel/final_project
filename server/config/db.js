// moongoose = pour la connexion à la base de données
const mongoose = require("mongoose");

// on importe les variables d'environnement stockées dans le fichier .env
require('dotenv').config({ path: './config/.env' });

// connection avec la base de donnée
// utilisation d'une variable d'environement > sécurité
mongoose.connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.tfs3m.mongodb.net/final-project",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to MongoDB");
    }
  );