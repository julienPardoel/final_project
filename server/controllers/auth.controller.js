// on importe bcrypt qui sert à encoder le password
const bcrypt = require("bcryptjs");

// dépendance servant à créer et utiliser des tokens
const jwt = require("jsonwebtoken");

// on importe les variables d'environnement stockées dans le fichier .env
require("dotenv").config({ path: "./config/.env" });

// on importe le modele prédéfini
const UserModel = require("../models/user.model");

// on exporte vers la route de la méthode POST à l'url /register qui sert de moyen d'inscription
module.exports.signUp = async (req, res) => {
  // on génère du sel pour hasher le mot de passe
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // création d'un nouvel utilisateur suivant le model défini dans le fichier user.model.js et le hashedPassword
  const user = new UserModel({
    pseudo: req.body.pseudo,
    email: req.body.email,
    password: hashedPassword,
  });

  // ajout des données dans la db
  const result = await user.save();

  const { password, ...data } = await result.toJSON();
  // réponse du serveur à l'ajout dans la db avec les infos users (sauf le password)
  res.send(data);
};

// on exporte vers la route methode post à l'url /login pour la connexion
module.exports.signIn = async (req, res) => {
  // on vérifie que l'email existe dans db
  const user = await UserModel.findOne({ email: req.body.email });

  // si l'email n'existe pas on retourne une erreur
  if (!user) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  // on compare le mot de passe avec celui de la db
  // si le mot de passe est bon
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(404).send({
      message: "Invalid credentials",
    });
  }

  // on crée un token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day in ms
  });

  //   on envoi en réponse le message
  res.send({
    message: "Authentification réussie",
  });
};

// on exporte vers la route methode post à l'url /logout pour la déconnection
module.exports.logOut = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.send({
    message: "Successfully logged out",
  });
};
