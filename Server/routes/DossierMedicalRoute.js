// 1. Importer le middleware pour creer la route EmployeRoute
import { Router } from "express";

// 2. Importer les regles de validation
import DossierMedicalRules from "../validations/EmployeValidation.js";
import { validationResult } from "express-validator";

// 3. Importer les regles de verification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4. Importer les controleurs du dossier medical
import {
  addDossierMedical,
  displayDossierMedical,
  getAllDossierMedical,
  updateDossierMedical,
  delDossierMedical,
} from "../controllers/DossierMedicalCTRL.js";

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
const DossierMedicalRoute = Router();

// 7. Definir les routes pour les controleurs de Dossier Medical
DossierMedicalRoute.all("*", verifierToken) 
  .all("*", autoriser(["Administrateur", "sudo"]))
  .get("/", getAllDossierMedical) 
  .post("/", DossierMedicalRules, validateRequest, addDossierMedical) 
  .delete("/:id", delDossierMedical)
  .put("/:id", DossierMedicalRules, validateRequest, updateDossierMedical) 
  .get("/:id", displayDossierMedical); 

// 8. Exporter la route "EmployeRoute" vers server.js
export default DossierMedicalRoute;
