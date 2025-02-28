// 1. Importer le middleware pour creer la route RendezVousRoute
import { Router } from "express";

// 2. Importer les regles de validation
import RendezVousRules from "../validations/RendezVousValidation.js";
import { validationResult } from "express-validator";

// 3. Importer les regles de verification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4. Importer les controleurs du rendez-vous
import {
  getAllRDV,
  addRDV,
  delRDV,
  updateRDV,
  displayRDV,
} from "../controllers/RendezVousCTRL.js";

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

// 6. Creer la route "RendezVousRoute"
const RendezVousRoute = Router();

// 7. Definir les routes pour les controleurs de "RendezVousRoute"
RendezVousRoute.all("*", verifierToken) // Proteger toutes les routes ci-dessous
  .all("*", autoriser())
  .get("/", getAllRDV)
  .post("/", RendezVousRules, validateRequest, addRDV)
  .delete("/:id", delRDV)
  .put("/:id", RendezVousRules, validateRequest, updateRDV)
  .get("/:id", displayRDV);

// 8. Exporter la route "RendezVousRoute" vers server.js
export default RendezVousRoute;
