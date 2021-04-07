// import de router de express afin d'assurer que les routes soit servies sur des url qu'on définit dans le index.js
const router = require('express').Router();

// on importe le fichier qui controlle l'authentification
const authController = require('../controllers/auth.controller');

// route d'une méthode GET à la racine de la route (localhost:"process.env.PORT"/api/user/)
router.get('/', (req,res)=>{
    res.send('Hello from user');
})

// authentification
router.post('/register', authController.signUp);

//! Export du module router a réutiliser dans le index.js pour associer les routes avec un router.
module.exports = router;