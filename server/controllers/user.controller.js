// on importe le modele utilisateur
const UserModel = require("../models/user.model");

// 
const ObjectId = require('mongoose').Types.ObjectId;

// on exporte la vue de tout les utilisateurs
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

// on exporte la vue d'un seul utilisateur
module.exports.userInfo = async (req, res) => {
  // console.log(req.params);

  // si l'id est inconnu dans la db on retourne une erreur
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  // si l'id est connu on envoi la data sauf le password
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknow : " + err);
  }).select("-password");
};
