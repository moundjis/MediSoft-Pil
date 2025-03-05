// 1. Importer le middleware pour créer la route PatientRoute
import { Router } from "express";

// 2. Importer les règles de validation
import PatientRules from "../validations/PatientValidation.js";
import { validationResult } from "express-validator";

// 3. Importer les règles de vérification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4. Importer les contrôleurs du patient
import {
  addPatient,
  displayPatient,
  getAllPatients,
  updatePatient,
  delPatient,
} from "../controllers/PatientCTRL.js";

// 5. Créer une fonction pour valider la requête
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

// 6. Créer la route PatientRoute
const PatientRoute = Router();

// 7. Définir les routes pour les contrôleurs de "Patient"
PatientRoute.all("*", verifierToken) // Protéger toutes les routes ci-dessous
  .all("*", autoriser(["medecin", "admin"])) // Vérifier les autorisations pour médecins et admins
  .get("/", getAllPatients) // Afficher tous les patients
  .post("/", PatientRules, validateRequest, addPatient) // Ajouter un nouveau patient
  .delete("/:id", delPatient) // Supprimer un patient
  .put("/:id", PatientRules, validateRequest, updatePatient) // Mettre à jour un patient
  .get("/:id", displayPatient); // Afficher un seul patient

// 8. Exporter la route "PatientRoute" vers server.js
export default PatientRoute;
