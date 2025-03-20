import { body } from "express-validator";

const consultationRules = [
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

  // Validation du nom du patient
  body("patientName")
    .exists()
    .withMessage("Le nom du patient est obligatoire")
    .isString()
    .withMessage("Le nom du patient doit être une chaîne de caractères"),

  // Validation du nom de l'employé
  body("employeName")
    .exists()
    .withMessage("Le nom de l'employé est obligatoire")
    .isString()
    .withMessage("Le nom de l'employé doit être une chaîne de caractères"),
];

// Exporter les règles de validation des consultations
export default consultationRules;