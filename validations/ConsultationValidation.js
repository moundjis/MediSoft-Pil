// 1. Importer le middleware de validation avec les 2 méthodes body() et param() pour valider les entrées
import { body, param } from "express-validator";

const consultationRules = [
  // Validation de l'ID de la consultation
  param("id")
    .isInt({ min: 1 })
    .withMessage("L'ID de la consultation doit être un entier positif"),

  // Validation du diagnostic
  body("diagnostic")
    .optional()
    .isString()
    .withMessage("Le diagnostic doit être une chaîne de caractères")
    .isLength({ max: 250 })
    .withMessage("Le diagnostic ne doit pas dépasser 250 caractères"),

  // Validation de la note
  body("note")
    .optional()
    .isString()
    .withMessage("La note doit être une chaîne de caractères"),

  // Validation des recommandations
  body("recommandations")
    .optional()
    .isString()
    .withMessage("Les recommandations doivent être une chaîne de caractères"),

  // Validation de l'ID du patient
  body("id_patient")
    .exists()
    .withMessage("L'ID du patient est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID du patient doit être un entier positif"),

];

// 2. Exporter les règles de validation des consultations
export default consultationRules;
