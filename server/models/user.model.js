//dans ce fichier on utilise mongoose
const mongoose = require("mongoose");

// on crée un modele de données pour les envoyer dans la db
const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 15,
      unique: true,
      trim: true, // supprime les espaces
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
        type: String,
        default: "./uploads/profil/random-user.png"
    },
    likes: {
        type: [String]
    }
  },
  {
    timestamps: true,
  }
);

// on crée une variable qui contient notre schema
// et on l'exporte vers les fichiers ...
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
