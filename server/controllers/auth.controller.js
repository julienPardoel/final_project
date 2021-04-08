// on importe bcrypt qui sert à encoder le password
const bcrypt = require('bcryptjs');

// on importe le modele prédéfini
const User = require("../models/user.model");

// on exporte vers la route de la méthode POST à l'url /register qui sert de moyen d'inscription
module.exports.signUp = async (req, res) => {
     // on génère du sel pour hasher le mot de passe
     const salt = await bcrypt.genSalt();
     const hashedPassword = await bcrypt.hash(req.body.password, salt);
 
     // création d'un nouvel utilisateur suivant le model défini dans le fichier user.model.js et le hashedPassword
     const user = new User({
         pseudo: req.body.pseudo,
         email: req.body.email,
         password: hashedPassword,
     })
 
     // ajout des données dans la db
     const result = await user.save();
 
     const {password, ...data} = await result.toJSON();
     // réponse du serveur à l'ajout dans la db avec les infos users (sauf le password)
     res.send(data);
};
