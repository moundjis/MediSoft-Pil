// 1. Importer le middleware de validation avec les 2 méthodes body() et param() pour valider les entrées
import { body, param } from "express-validator";

const consultationRules = [
  // Validation de la date de la consultation
  body("date")
    .exists()
    .withMessage("La date est obligatoire")
    .isISO8601()
    .withMessage("La date doit être au format YYYY-MM-DD")
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("La date doit être au format YYYY-MM-DD"),

  // Validation du diagnostic
  body("diagnostic")
    .exists()
    .withMessage("Le diagnostic est obligatoire")
    .isString()
    .withMessage("Le diagnostic doit être une chaîne de caractères"),

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
  body("ID_Patient")
    .exists()
    .withMessage("L'ID du patient est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID du patient doit être un entier positif"),
  
    
  // Validation de l'ID de l'employé
  body("ID_Employee")
    .exists()
    .withMessage("L'ID de l'employé est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID de l'employé doit être un entier positif"),

  // Validation de l'ID de la consultation
  param("id")
    .isInt({ min: 1 })
    .withMessage("L'ID de la consultation doit être un entier positif"),
];

// 2. Exporter les règles de validation des consultations
export default consultationRules;
