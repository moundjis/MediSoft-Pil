// 1. Importer le middleware de validation
import { body, param } from "express-validator";

const pharmacieRules = [
  // Validation de l'ID de la pharmacie (pour les routes avec paramètre)
  param("id")
    .isInt({ min: 1 })
    .withMessage("L'ID de la pharmacie doit être un entier positif"),

  // Validation du nom
  body("nom")
    .exists()
    .withMessage("Le nom est obligatoire")
    .isString()
    .withMessage("Le nom doit être une chaîne de caractères"),

  // Validation de l'adresse
  body("adresse")
    .exists()
    .withMessage("L'adresse est obligatoire")
    .isString()
    .withMessage("L'adresse doit être une chaîne de caractères"),

  // Validation du téléphone
  body("telephone")
    .exists()
    .withMessage("Le téléphone est obligatoire")
    .isLength({ min: 10, max: 10 })
    .withMessage("Le téléphone doit contenir exactement 10 caractères"),

  // Validation de l'email
  body("email")
    .exists()
    .withMessage("L'email est obligatoire")
    .isEmail()
    .withMessage("L'email doit être une adresse email valide"),
];

// 2. Exporter les règles de validation
export default pharmacieRules;
