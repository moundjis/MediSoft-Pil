// 1. Importer le middleware pour créer la route
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

// 6. Créer une instance de Router
const PharmacieRoute = Router();

// 7. Définir les routes pour les contrôleurs de "Pharmacie"
//PharmacieRoute.all("*", verifierToken) // Protéger toutes les routes
  //.all("*", autoriser(["Administrateur", "sudo"])) // Autoriser uniquement les rôles spécifiés
  PharmacieRoute.get("/", getAllPharmacies) // Afficher toutes les pharmacies
  .post("/", PharmacieRules, validateRequest, addPharmacie) // Ajouter une nouvelle pharmacie
  .delete("/:id", delPharmacie) // Supprimer une pharmacie
  .put("/:id", PharmacieRules, validateRequest, updatePharmacie) // Mettre à jour une pharmacie
  .get("/:id", displayPharmacie); // Afficher une seule pharmacie

// 8. Exporter la route
export default PharmacieRoute;
