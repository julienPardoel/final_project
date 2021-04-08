// on importe le modele utilisateur
const UserModel = require('../models/user.model');




// on exporte la vue de tout les utilisateurs
module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
};