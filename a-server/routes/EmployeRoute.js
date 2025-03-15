// 1. Importer le middleware pour creer la route EmployeRoute
import { Router } from "express";

// 2. Importer les regles de validation
import EmployeRules from "../validations/EmployeValidation.js";
import { validationResult } from "express-validator";

// 3. Importer les regles de verification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4. Importer les controleurs de l'employe
import {
  addEmploye,
  displayEmploye,
  getAllEmployes,
  updateEmploye,
  delEmploye,
} from "../controllers/EmployeCTRL.js";

// 5. creer une function pour valider la requete
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Donnees invalides",
      errors: errors.array(),
    });
  }
  next(); // Passe au controleur si la validation est OK dans la requete
};

// 6. Creer la route EmployeRoute
const EmployeRoute = Router();

// 7. Definir les routes pour les controleurs de "Employe"
//EmployeRoute.all("*", verifierToken) // Proteger toutes les routes ci-dessous
//.all("*", autoriser(["Administrateur", "sudo"]))
EmployeRoute.get("/", getAllEmployes) // Afficher tous les employes
  .post("/", EmployeRules, validateRequest, addEmploye) // Ajouter un nouvel employe
  .delete("/:id", delEmploye) // Supprimer un employe
  .put("/:id", EmployeRules, validateRequest, updateEmploye) // Mettre a jour un employe
  .get("/:id", displayEmploye); // Afficher un seul employe

// 8. Exporter la route "EmployeRoute" vers server.js
export default EmployeRoute;
