// 1. Importer le middleware de validation avec les 2 méthodes body() et param()
import { body, param } from "express-validator";

const employeRules = [
  // Validation du nom
  body("nom")
    .exists()
    .withMessage("Le nom est obligatoire")
    .isString()
    .withMessage("Le nom doit être une chaîne de caractères"),

  // Validation du prénom
  body("prenom")
    .exists()
    .withMessage("Le prénom est obligatoire")
    .isString()
    .withMessage("Le prénom doit être une chaîne de caractères"),

  // Validation de la date de naissance
  body("date_de_naissance")
    .exists()
    .withMessage("La date de maissance est obligatoire")
    .isISO8601()
    .withMessage("La date de naissance doit être au format YYYY-MM-DD")
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("La date de naissance doit être au format YYYY-MM-DD"),

  // Validation du NAS
  body("nas")
    .notEmpty()
    .withMessage("Le NAS est requis.")
    .isLength({ min: 9, max: 9 })
    .withMessage("Le NAS doit contenir exactement 9 chiffres.")
    .isNumeric()
    .withMessage("Le NAS ne doit contenir que des chiffres."),

  // Validation du courriel
  body("courriel")
    .exists()
    .withMessage("Le courriel est obligatoire")
    .isEmail()
    .withMessage("Le courriel doit être une adresse email valide"),

  // Validation du mot de passe
  body("password")
    .exists()
    .withMessage("Le mot de passe est obligatoire")
    .isLength({ min: 3, max: 100 })
    .withMessage("Le mot de passe doit contenir entre 3 et 100 caractères"),

  // Validation du téléphone
  body("telephone")
    .exists()
    .withMessage("Le téléphone est obligatoire")
    .isLength({ min: 10, max: 10 })
    .withMessage("Le téléphone doit contenir exactement 10 caractères"),

  // Validation de l'adresse
  body("adresse")
    .exists()
    .withMessage("L'adresse est obligatoire")
    .isString()
    .withMessage("L'adresse doit être une chaîne de caractères"),

  // Validation de l'ID du rôle
  body("id_role")
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
