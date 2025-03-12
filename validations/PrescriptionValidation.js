// 1. Importer le midleweare de validation avec les 2 methodes body() et param() pour valider les entrees
import { body, param } from "express-validator";

const prescriptionRules = [
  // Validation de l'ID
  param("id").isInt({ min: 1 }).withMessage("L'ID doit être un entier positif"),

  //  Verifie et valide les champs envoyes dans les parametres d'URL (req.params).
  // Validation du medicament
  body("medicament") //  Verifie et valide les champs envoyes dans le body (req.body)
    .exists()
    .withMessage("Le médicament est obligatoire")
    .isString()
    .withMessage("Le nom du médicament doit être une chaîne de caractères"),

  // Validation du dosage
  body("dosage")
    .exists()
    .withMessage("Le dosage est obligatoire")
    .isString()
    .withMessage("Le dosage doit être une chaîne de caractères"),

  // Validation de la quantite
  body("quantite")
    .exists()
    .withMessage("La quantité est obligatoire")
    .isInt({ min: 1 })
    .withMessage("La quantité doit être un entier positif"),

  // Validation de la note
  body("note_medecin")
    .optional()
    .withMessage("La note est obligatoire")
    .isString()
    .withMessage("La note doit être une chaîne de caractères"),

  // Validation du renouvellement
  body("renouvellement")
    .optional()
    .isBoolean()
    .withMessage("Le renouvellement doit être un booléen"),

  // Validation de l'ID du patient
  body("id_patient")
    .exists()
    .withMessage("L'ID du patient est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID du patient doit être un entier positif"),

  // Validation de l'ID du employe
  body("id_employe")
    .exists()
    .withMessage("L'ID de l'employe est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID de l'employe doit être un entier positif"),

  // Validation de l'ID du dossier medical
  body("id_dossier_medical")
    .exists()
    .withMessage("L'ID du dossier medical est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID du dossier medical doit être un entier positif"),

  // Validation de l'ID de la pharmacie
  body("id_pharmacie")
    .optional()
    .withMessage("L'ID de la pharmacie est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID de la pharmacie doit être un entier positif"),
];

// 2. Exporter les roules de validation de la prescription
export default prescriptionRules;
