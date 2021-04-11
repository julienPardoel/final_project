// on importe le modele utilisateur
const UserModel = require("../models/user.model");

//
const ObjectId = require("mongoose").Types.ObjectId;

// on exporte la vue d'un seul utilisateur
module.exports.userInfo = async (req, res) => {
  // si l'id est inconnu dans la db on retourne une erreur
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  // si l'id est connu on envoi la data sauf le password
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknow : " + err);
  }).select("-password");
};

// on exporte la fonction modifier l'utilisateur
module.exports.updatePseudo = async (req, res) => {
  // si l'id est inconnu dans la db on retourne une erreur
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  // si l'id est connu on modifie le pseudo
  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          pseudo: req.body.pseudo,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

// on exporte la fonction supprimer l'utilisateur
module.exports.deleteUser = async (req, res) => {
  // si l'id est inconnu dans la db on retourne une erreur
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  // si l'id est connu on supprime l'utilisateur
  try {
    await UserModel.remove(
      { _id: req.params.id },
      res.status(200).json({ message: "succesfully deleted" })
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
