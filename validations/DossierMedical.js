// 1. Importer le middleware de validation avec les 2 méthodes body() et param()
import { body, param } from "express-validator";

const dossierMedicalRules = [
  // Validation du prénom/nom de la mère
  body("Prenom_Nom_Mere")
    .optional()
    .isString()
    .withMessage("Le prénom/nom de la mère doit être une chaîne de caractères"),

  // Validation du prénom/nom du père
  body("Prenom_Nom_Pere")
    .optional()
    .isString()
    .withMessage("Le prénom/nom du père doit être une chaîne de caractères"),

  // Validation du numéro d'assurance
  body("No_assurance")
    .exists()
    .withMessage("Le numéro d'assurance est obligatoire")
    .isString()
    .withMessage("Le numéro d'assurance doit être une chaîne de caractères"),

  // Validation des antécédents familiaux
  body("Antecedant_Fam")
    .optional()
    .isString()
    .withMessage(
      "Les antécédents familiaux doivent être une chaîne de caractères"
    ),

  // Validation des maladies
  body("Maladies_Chronique")
    .optional()
    .isString()
    .withMessage("Les maladies doivent être une chaîne de caractères"),

  // Validation des allergies
  body("Allergies")
    .optional()
    .isString()
    .withMessage("Les allergies doivent être une chaîne de caractères"),

  // Validation de la date de création
  body("Date_de_Creation")
    .exists()
    .withMessage("La date est obligatoire")
    .isISO8601()
    .withMessage("La date doit être au format YYYY-MM-DD")
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("La date doit être au format YYYY-MM-DD"),

  // Validation du médecin traitant
  body("Medecin_traitant")
    .optional()
    .isString()
    .withMessage("Le médecin traitant doit être une chaîne de caractères"),

  // Validation des traitements
  body("Traitements")
    .optional()
    .isString()
    .withMessage("Les traitements doivent être une chaîne de caractères"),

  // Validation de l'ID du dossier médical (pour les routes qui utilisent un paramètre ID)
  param("id")
    .isInt({ min: 1 })
    .withMessage("L'ID du dossier médical doit être un entier positif"),
];

// 2. Exporter les règles de validation du dossier médical
export default dossierMedicalRules;
