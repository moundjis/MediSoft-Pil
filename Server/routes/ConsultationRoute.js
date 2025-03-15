// 1. Importer le middleware pour creer la route PrescriptionRoute
import { Router } from "express";

// 2. Importer les regles de validation
import ConsultationRules from "../validations/ConsultationValidation.js";
import { validationResult } from "express-validator";

// 3. Importer les regles de verification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4. Importer les controleurs de la prescription
import {
  addConsultation,
  displayConsultation,
  getAllConsultations,
  updateConsultation,
  delConsultation,
} from "../controllers/ConsultationCTRL.js";

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

// 6. creer une instance de router
const ConsultationRoute = Router();

// 7. Definir les routes pour les controleurs de "Consultation"
ConsultationRoute.all("*", verifierToken) 
  .all("*", autoriser(["Administrateur", "sudo"]))
  .get("/", getAllConsultations) 
  .post("/", ConsultationRules, validateRequest, addConsultation) 
  .delete("/:id", delConsultation) 
  .put("/:id", ConsultationRules, validateRequest, updateConsultation) 
  .get("/:id", displayConsultation); 
  

// 8. Exporter la route "PrescriptionRoute" vers server.js
export default ConsultationRoute;
