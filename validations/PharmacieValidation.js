import { body } from "express-validator";

const PharmacieRules = [
  body("Nom")
    .notEmpty()
    .withMessage("Le nom de la pharmacie est obligatoire")
    .isLength({ max: 50 })
    .withMessage("Le nom ne doit pas dépasser 50 caractères"),
  body("Adresse")
    .notEmpty()
    .withMessage("L'adresse de la pharmacie est obligatoire")
    .isLength({ max: 50 })
    .withMessage("L'adresse ne doit pas dépasser 50 caractères"),
  body("Telephone")
    .notEmpty()
    .withMessage("Le téléphone de la pharmacie est obligatoire")
    .isLength({ max: 13 })
    .withMessage("Le téléphone ne doit pas dépasser 13 caractères")
    .matches(/^\+?\d{1,13}$/)
    .withMessage("Le téléphone doit être au format valide (ex: +1234567890)"),
  body("Courriel")
    .notEmpty()
    .withMessage("L'adresse e-mail de la pharmacie est obligatoire")
    .isEmail()
    .withMessage("L'adresse e-mail doit être valide")
    .isLength({ max: 50 })
    .withMessage("L'adresse e-mail ne doit pas dépasser 50 caractères"),
];

export default PharmacieRules;
