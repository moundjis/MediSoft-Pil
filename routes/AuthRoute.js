// 1. Importer le middleware pour creer la route AuthRoute
import { Router } from "express";

// 2. Importer les regles de validation
import {
  validateLogin,
  validateRegister,
} from "../validations/AuthValidation.js";

// 3. Importer le contrôleur d'authentification
import { login, register } from "../controllers/AuthCTRL.js";

const AuthRoute = Router();

// Route pour la connexion (login)
// - validateLogin : Valide les données de connexion (courriel et mot de passe)
// - login : Traite la connexion et retourne un token JWT
AuthRoute.post("/login", validateLogin, login); // Route pour se connecter

// Route pour l'inscription (register)
// - validateRegister : Valide les données d'inscription (nom, prénom, courriel, etc.)
// - register : Crée un nouvel utilisateur dans la base de données
AuthRoute.post("/register", validateRegister, register); // Route pour s'inscrire

// 5. Exporter le routeur
export default AuthRoute;
