import { body } from "express-validator";

const PatientRules = [
  body("Nom").notEmpty().withMessage("Le nom est obligatoire"),
  body("Prenom").notEmpty().withMessage("Le prénom est obligatoire"),
  body("Date_de_naissance")
    .isDate()
    .withMessage("La date de naissance doit être valide"),
  body("NAS").isInt().withMessage("Le NAS doit être un nombre entier"),
  body("Courriel").isEmail().withMessage("L'adresse e-mail doit être valide"),
  body("Telephone")
    .isString()
    .withMessage("Le téléphone doit être une chaîne de caractères"),
  body("Adresse").notEmpty().withMessage("L'adresse est obligatoire"),
  body("ID_Employe")
    .optional()
    .isInt()
    .withMessage("L'ID de l'employé doit être un nombre entier"),
  body("ID_Dossier_Medical")
    .optional()
    .isInt()
    .withMessage("L'ID du dossier médical doit être un nombre entier"),
];

export default PatientRules;
