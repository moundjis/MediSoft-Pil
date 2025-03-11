import { body, param } from "express-validator";

const routeRules = [
  // Valider le titre
  body("titre")
    .isIn(["Medecin", "Administrateur", "sudo"])
    .withMessage(
      "Le titre du rôle doit être 'Administrateur', 'Medecin' ou 'sudo'."
    ),

  // Valider la specialite
  body("specialite")
    .optional() // La spécialité est obligatoire uniquement pour les médecins
    .isIn(["Cardiologue", "Ophtalmologue", "Dermatologue", "Dentiste"])
    .withMessage(
      "La spécialité doit être 'Cardiologue', 'Ophtalmologue', 'Dermatologue' ou 'Dentiste'."
    ),

  // Validation de l'ID
  param("id").isInt({ min: 1 }).withMessage("L'id doit être un entier positif"),
];

export default routeRules;
