// 1. Importer le middleware pour creer la route RoleRoute
import { Router } from "express";

// 2. Importer les regles de validation
import RoleRules from "../validations/RoleValidation.js";
import { validationResult } from "express-validator";

// // 3. Importer les regles de verification et autorisation
import { verifierToken } from "../authentification/verifierToken.js";
import autoriser from "../authentification/autorisation.js";

// 4. Importer les controleurs du role
import {
  getAllRoles,
  addRole,
  delRole,
  updateRole,
  displayRole,
} from "../controllers/RoleCTRL.js";

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

// 6. Creer la route "RoleRoute"
const RoleRoute = Router();

// 7. Definir les routes pour les controleurs de "RoleRoute"
// RoleRoute.all("*", verifierToken).all(
//   "*",
//   autoriser(["sudo", "Administrateur"])
// );
RoleRoute.get("/", getAllRoles)
  .post("/", RoleRules, validateRequest, addRole)
  .delete("/:id", delRole)
  .put("/:id", RoleRules, validateRequest, updateRole)
  .get("/:id", displayRole);

// 8. Exporter la route "RoleRoute" vers server.js
export default RoleRoute;
