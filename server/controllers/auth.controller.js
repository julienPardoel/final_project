const bcrypt = require('bcryptjs');

// on importe le modele prédéfini
const User = require("../models/user.model");

// on exporte vers la route de la méthode POST à l'url /register qui sert de moyen d'inscription
module.exports.signUp = async (req, res) => {
     //? On génère du sel pour hasher le mot de passe
     const salt = await bcrypt.genSalt();
     const hashedPassword = await bcrypt.hash(req.body.password, salt);
 
     //? Création d'un nouvel utilisateur suivant le model défini dans le fichier user.model.js et le hashedPassword
     const user = new User({
         pseudo: req.body.pseudo,
         email: req.body.email,
         password: hashedPassword,
     })
 
     //? Ajout des données dans la BDD
     const result = await user.save();
 
     const {password, ...data} = await result.toJSON();
     //? Response du serveur à l'ajout dans la BDD avec les infos users (sauf le password)
     res.send(data);
};
