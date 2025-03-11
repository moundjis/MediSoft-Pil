import { body } from "express-validator";

// Règles de validation pour l'inscription (register)
export const validateRegister = [
  // Validation du nom
  body("nom")
    .notEmpty()
    .withMessage("Le nom est requis.")
    .isString()
    .withMessage("Le nom doit être une chaîne de caractères."),

  // Validation du prénom
  body("prenom")
    .notEmpty()
    .withMessage("Le prénom est requis.")
    .isString()
    .withMessage("Le prénom doit être une chaîne de caractères."),

  // Validation de la date de naissance
  body("date_de_naissance")
    .exists()
    .withMessage("La date de naissance est obligatoire")
    .isISO8601()
    .withMessage("La date de naissance doit être au format YYYY-MM-DD")
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("La date de naissance doit être au format YYYY-MM-DD"),

  // Validation du NAS (Numéro d'assurance sociale)
  body("nas")
    .notEmpty()
    .withMessage("Le NAS est requis.")
    .isLength({ min: 9, max: 9 })
    .withMessage("Le NAS doit contenir exactement 9 chiffres.")
    .isNumeric()
    .withMessage("Le NAS ne doit contenir que des chiffres."),

  // Validation du courriel
  body("courriel")
    .notEmpty()
    .withMessage("L'email est requis.")
    .isEmail()
    .withMessage("L'email doit être valide."),

  // Validation du mot de passe
  body("password")
    .notEmpty()
    .withMessage("Le mot de passe est requis.")
    .isLength({ min: 3, max: 100 })
    .withMessage("Le mot de passe doit contenir au moins 3 caractères."),

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
    .notEmpty()
    .withMessage("L'ID du rôle est requis.")
    .isInt({ min: 1 })
    .withMessage("L'ID du rôle doit être un entier positif."),
];

// Règles de validation pour la connexion (login)
export const validateLogin = [
  // Validation du courriel
  body("courriel")
    .notEmpty()
    .withMessage("L'email est requis.")
    .isEmail()
    .withMessage("L'email doit être valide."),

  // Validation du mot de passe
  body("password").notEmpty().withMessage("Le mot de passe est requis."),
];
