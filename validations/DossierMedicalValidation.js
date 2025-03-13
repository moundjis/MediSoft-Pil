// 1. Importer le middleware de validation avec les 2 méthodes body() et param()
import { body, param } from "express-validator";

const dossierMedicalRules = [
  // Validation de l'ID du dossier médical (pour les routes qui utilisent un paramètre ID)
  param("id")
    .isInt({ min: 1 })
    .withMessage("L'ID du dossier médical doit être un entier positif"),

  // Validation du prénom et nom de la mère
  body("prenom_nom_mere")
    .optional()
    .isString()
    .withMessage(
      "Le prénom et nom de la mère doivent être une chaîne de caractères"
    )
    .isLength({ max: 50 })
    .withMessage(
      "Le prénom et nom de la mère ne doivent pas dépasser 50 caractères"
    ),

  // Validation du prénom et nom du père
  body("prenom_nom_pere")
    .optional()
    .isString()
    .withMessage(
      "Le prénom et nom du père doivent être une chaîne de caractères"
    )
    .isLength({ max: 50 })
    .withMessage(
      "Le prénom et nom du père ne doivent pas dépasser 50 caractères"
    ),

  // Validation des antécédents familiaux
  body("antecedant_fam")
    .optional()
    .isString()
    .withMessage(
      "Les antécédents familiaux doivent être une chaîne de caractères"
    )
    .isLength({ max: 250 })
    .withMessage(
      "Les antécédents familiaux ne doivent pas dépasser 250 caractères"
    ),

  // Validation des maladies chroniques
  body("maladies_chroniques")
    .optional()
    .isString()
    .withMessage(
      "Les maladies chroniques doivent être une chaîne de caractères"
    )
    .isLength({ max: 250 })
    .withMessage(
      "Les maladies chroniques ne doivent pas dépasser 250 caractères"
    ),

  // Validation des allergies
  body("allergies")
    .optional()
    .isString()
    .withMessage("Les allergies doivent être une chaîne de caractères")
    .isLength({ max: 250 })
    .withMessage("Les allergies ne doivent pas dépasser 250 caractères"),

  // Validation des traitements
  body("traitements")
    .optional()
    .isString()
    .withMessage("Les traitements doivent être une chaîne de caractères")
    .isLength({ max: 250 })
    .withMessage("Les traitements ne doivent pas dépasser 250 caractères"),

  // Validation de l'ID du patient
  body("id_patient")
    .exists()
    .withMessage("L'ID du patient est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID du patient doit être un entier positif"),

  // Validation de l'ID du patient
  body("id_employe")
    .exists()
    .withMessage("L'ID de l'employe est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID de l'employe doit être un entier positif"),
];

// 2. Exporter les règles de validation du dossier médical
export default dossierMedicalRules;
