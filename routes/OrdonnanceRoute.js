// 1. Importer le middleware pour creer la route PrescriptionRoute
import { Router } from "express";

// 2. Importer les regles de validation
import ordonnanceRules from "../validations/OrdonnanceValidation.js";
import { validationResult } from "express-validator";

// 3. Importer les regles de verification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4. Importer les controleurs de l'ordonnance
import {
  getAllOrdonnances,
  displayOrdonnance,
  updateOrdonnance,
  delOrdonnance,
  addOrdonnance,
} from "../controllers/OrdonnanceCTRL.js";

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
const OrdonnanceRoute = Router();

// 7. Definir les routes pour les controleurs de "Ordonnance"
OrdonnanceRoute.all("*", verifierToken)
  .all("*", autoriser(["Administrateur", "sudo"]))
  .get("/", getAllOrdonnances)
  .post("/", ordonnanceRules, validateRequest, addOrdonnance)
  .delete("/:id", delOrdonnance)
  .put("/:id", ordonnanceRules, validateRequest, updateOrdonnance)
  .get("/:id", displayOrdonnance);

// 8. Exporter la route "OrdonnanceRoute" vers server.js
export default OrdonnanceRoute;
