// 1. Importer le middleware pour creer la route PrescriptionRoute
import { Router } from "express";

// 2. Importer les regles de validation
import prescriptionRules from "../validations/PrescriptionValidation.js";
import { validationResult } from "express-validator";

// 3. Importer les regles de verification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4. Importer les controleurs de la prescription
import {
  getAllPrescriptions,
  addPrescription,
  delPrescription,
  updatePrescription,
  displayPrescription,
} from "../controllers/PrescriptionCTRL.js";

// 5. Fonction pour valider les requetes
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

// 6. Creer la route "PrescriptionRoute"
const PrescriptionRoute = Router();

// 7. Definir les routes pour les controleurs de "Prescription"
//PrescriptionRoute.all("*", verifierToken) // Proteger toutes les routes ci-dessous
  //.all("*", autoriser(["medecin", "admin"])) // Verifier les autorisations pour medecins et admins
  PrescriptionRoute.get("/", getAllPrescriptions)
  .post("/", prescriptionRules, validateRequest, addPrescription)
  .delete("/:id", delPrescription)
  .put("/:id", prescriptionRules, validateRequest, updatePrescription)
  .get("/:id", displayPrescription);

// 8. Exporter la route "PrescriptionRoute" vers server.js
export default PrescriptionRoute;
