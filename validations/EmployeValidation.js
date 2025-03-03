// 1. Importer le middleware de validation avec les 2 méthodes body() et param()
import { body, param } from "express-validator";

const employeRules = [
  // Validation du nom
  body("Nom")
    .exists()
    .withMessage("Le nom est obligatoire")
    .isString()
    .withMessage("Le nom doit être une chaîne de caractères"),

  // Validation du prénom
  body("Prenom")
    .exists()
    .withMessage("Le prénom est obligatoire")
    .isString()
    .withMessage("Le prénom doit être une chaîne de caractères"),

  // Validation de la date de naissance
  body("Date_de_naissance")
    .exists()
    .withMessage("La date de maissance est obligatoire")
    .isISO8601()
    .withMessage("La date de naissance doit être au format YYYY-MM-DD")
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("La date de naissance doit être au format YYYY-MM-DD"),

  // Validation du NAS
  body("NAS")
    .exists()
    .withMessage("Le NAS est obligatoire")
    .isInt()
    .withMessage("Le NAS doit être un entier"),

  // Validation du courriel
  body("Courriel")
    .exists()
    .withMessage("Le courriel est obligatoire")
    .isEmail()
    .withMessage("Le courriel doit être une adresse email valide"),

  // Validation du téléphone
  body("Telephone")
    .exists()
    .withMessage("Le téléphone est obligatoire")
    .isString()
    .withMessage("Le téléphone doit être une chaîne de caractères")
    .isLength({ min: 10, max: 13 })
    .withMessage("Le téléphone doit contenir entre 10 et 13 caractères"),

  // Validation de l'adresse
  body("Addresse")
    .exists()
    .withMessage("L'adresse est obligatoire")
    .isString()
    .withMessage("L'adresse doit être une chaîne de caractères"),

  // Validation de l'ID du rôle
  body("ID_Role")
    .exists()
    .withMessage("L'ID du rôle est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID du rôle doit être un entier positif"),

  // Validation de l'ID de l'employé (pour les routes qui utilisent un paramètre ID)
  param("id")
    .isInt({ min: 1 })
    .withMessage("L'ID de l'employé doit être un entier positif"),
];

// 2. Exporter les règles de validation de l'employé
export default employeRules;
