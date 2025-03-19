import { Router } from "express";
import EmployeRules from "../validations/EmployeValidation.js";
import { validationResult } from "express-validator";
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";
import {
  addEmploye,
  displayEmploye,
  getAllEmployes,
  updateEmploye,
  delEmploye,
  loginEmploye,
} from "../controllers/EmployeCTRL.js";

// Fonction pour valider la requête
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Données invalides",
      errors: errors.array(),
    });
  }
  next(); // Passe au contrôleur si la validation est OK dans la requête
};

// Créer la route EmployeRoute
const EmployeRoute = Router();

// Définir les routes pour les contrôleurs de "Employe"
EmployeRoute.get("/", getAllEmployes) // Afficher tous les employés
  .post("/", EmployeRules, validateRequest, addEmploye) // Ajouter un nouvel employé
  .post("/login", loginEmploye) // Connexion d'un employé
  .delete("/:id", delEmploye) // Supprimer un employé
  .put("/:id", EmployeRules, validateRequest, updateEmploye) // Mettre à jour un employé
  .get("/:id", displayEmploye); // Afficher un seul employé
export default EmployeRoute;
