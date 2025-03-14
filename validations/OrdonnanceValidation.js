// 1. Importer le middleware de validation avec les 2 méthodes body() et param() pour valider les entrées

import { body, param } from "express-validator";

const ordonnanceRules = [
  // Validation de l'ID de l'ordonnance
  param("id")
    .exists()
    .isInt({ min: 1 })
    .withMessage("L'ID de l'ordonnance doit être un entier positif"),

  // Validation de la date d'ordonnance (format ISO 8601)
  body("date_ordonnance")
    .optional()
    .isISO8601()
    .withMessage(
      "La date de l'ordonnance doit être au format ISO 8601 (YYYY-MM-DD HH:MM:SS)"
    ),

  // Validation de la note (optionnelle et max 500 caractères)
  body("note")
    .optional()
    .isLength({ max: 500 })
    .withMessage("La note ne doit pas dépasser 500 caractères"),

  // Validation de l'ID de la pharmacie
  body("id_pharmacie")
    .exists()
    .withMessage("L'ID de la pharmacie est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID de la pharmacie doit être un entier positif"),
];

export default ordonnanceRules;
