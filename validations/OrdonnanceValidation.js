// 1. Importer le middleware de validation avec les 2 méthodes body() et param() pour valider les entrées
import { body, param } from "express-validator";

const ordonnanceRules = [
  // Validation de l'ID de l'ordonnance
  param("id")
    .optional()
    .isInt({ min: 1 })
    .withMessage("L'ID de l'ordonnance doit être un entier positif"),

  // Validation de l'ID de la prescription
  body("id_prescription")
    .exists()
    .withMessage("L'ID de la prescription est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID de la prescription doit être un entier positif"),

  // Validation de l'ID de la pharmacie
  body("id_pharmacie")
    .exists()
    .withMessage("L'ID de la pharmacie est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID de la pharmacie doit être un entier positif"),
];

// 2. Exporter les règles de validation des ordonnances
export default ordonnanceRules;
