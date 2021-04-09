// on importe les variables d'environnement stockées dans le fichier .env
require('dotenv').config({ path: './config/.env' });

// express : framework qui fournit des fonctionnalités
const express = require("express");

// on importe la route de l'utilisateur
const userRoutes = require('./routes/user.routes');



// on importe la db
require('./config/db');

// on defini que la variable app utilisera express
const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);

// envoi de la db vers une adresse sur une app locale
// utilisation d'une variable d'environement > sécurité
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
