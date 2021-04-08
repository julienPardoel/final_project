// import de router de express afin d'assurer que les routes soit servies sur des url qu'on définit dans le index.js
const router = require('express').Router();

// on importe le fichier qui controlle l'authentification
const authController = require('../controllers/auth.controller');

// on importe le fichier qui controlle la gestion du profil user
const userController = require('../controllers/user.controller');

// authentification
router.post('/register', authController.signUp);

// gestion profil user
router.get('/', userController.getAllUsers);

//! Export du module router a réutiliser dans le index.js pour associer les routes avec un router.
module.exports = router;