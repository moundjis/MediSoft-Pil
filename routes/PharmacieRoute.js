// 1. Importer le middleware pour créer la route PharmacieRoute
import { Router } from "express";

// 2. Importer les règles de validation
import PharmacieRules from "../validations/PharmacieValidation.js";
import { validationResult } from "express-validator";

// 3. Importer les règles de vérification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4. Importer les contrôleurs de la pharmacie
import {
  addPharmacie,
  displayPharmacie,
  getAllPharmacies,
  updatePharmacie,
  delPharmacie,
} from "../controllers/PharmacieCTRL.js";

// 5. Créer une fonction pour valider la requête
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Données invalides",
      errors: errors.array(),
    });
  }
  next();
};

// 6. Créer la route PharmacieRoute
const PharmacieRoute = Router();

// 7. Définir les routes pour les contrôleurs de "Pharmacie"
PharmacieRoute.all("*", verifierToken)
  .all("*", autoriser(["admin"]))
  .get("/", getAllPharmacies)
  .post("/", PharmacieRules, validateRequest, addPharmacie)
  .delete("/:id", delPharmacie)
  .put("/:id", PharmacieRules, validateRequest, updatePharmacie)
  .get("/:id", displayPharmacie);

// 8. Exporter la route "PharmacieRoute" vers server.js
export default PharmacieRoute;
