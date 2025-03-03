// 1.Importer le middleware pour creer la route DossierMedicalRoute
import { Router } from "express";

// 2.Importer les regles de validation
import DossierMedicalRules from "../validations/DossierMedicalValidation.js";
import { validationResult } from "express-validator";

// 3.Importer les regles de verification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4.Importer les controleurs du dossier medical
import {
  addDossierMedical,
  getAllDossiersMedicaux,
  displayDossierMedical,
  delDossierMedical,
  updateDossierMedical,
  displayDossierMedicalPatient,
} from "../controllers/DossierMedicalCTRL.js";

// 5.Creer une fonction pour valider la requete
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

// 6.Creer la route DossierMedicalRoute
const DossierMedicalRoute = Router();

// 7.Definir les routes pour les controleurs du dossier medical
DossierMedicalRoute.all("*", verifierToken) // Proteger toutes les routes ci-dessous
  .all("*", autoriser(["medecin", "admin"])) // Verifier les autorisations pour medecins et admins
  .get("/", getAllDossiersMedicaux) // Afficher tous les dossiers medicaux
  .post("/", DossierMedicalRules, validateRequest, addDossierMedical) // Ajouter un nouveau dossier medical
  .delete("/:id", delDossierMedical) // Supprimer un dossier medical
  .put("/:id", DossierMedicalRules, validateRequest, updateDossierMedical) // Mettre a jour un dossier medical
  .get("/patient/:id", displayDossierMedicalPatient) // Afficher tous les dossiers medicaux d'un patient
  .get("/:id", displayDossierMedical); // Afficher un seul dossier medical
// 8.Exporter la route DossierMedicalRoute vers server.js
export default DossierMedicalRoute;
