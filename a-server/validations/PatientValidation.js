// 1. Importer le middleware de validation avec les 2 méthodes body() et param()
import { body, param } from "express-validator";

const patientRules = [
  

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
    .withMessage("La date de naissance est obligatoire")
    .isISO8601()
    .withMessage("La date de naissance doit être au format YYYY-MM-DD"),

  // Validation du courriel
  body("courriel")
    .exists()
    .withMessage("Le courriel est obligatoire")
    .isEmail()
    .withMessage("Le courriel doit être une adresse email valide"),

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

];

// 2. Exporter les règles de validation du patient
export default patientRules;
