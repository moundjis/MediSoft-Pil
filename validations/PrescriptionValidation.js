// 1. Importation du midleweare de validation avec les 2 methodes body() et param() pour valider les entrees
import { body, param } from "express-validator";

const prescriptionRules = [
  // Validation du médicament
  body("Medicament") //  Verifie et valide les champs envoyes dans le body (req.body)
    .exists()
    .withMessage("Le médicament est obligatoire")
    .isString()
    .withMessage("Le nom du médicament doit être une chaîne de caractères"),

  // Validation du dosage
  body("Dosage")
    .exists()
    .withMessage("Le dosage est obligatoire")
    .isString()
    .withMessage("Le dosage doit être une chaîne de caractères"),

  // Validation de la quantité
  body("Quantite")
    .exists()
    .withMessage("La quantité est obligatoire")
    .isInt({ min: 1 })
    .withMessage("La quantité doit être un entier positif"),

  // Validation de la note
  body("Note")
    .exists()
    .withMessage("La note est obligatoire")
    .isString()
    .withMessage("La note doit être une chaîne de caractères"),

  // Validation du renouvellement
  body("Renouvellement")
    .optional()
    .isBoolean()
    .withMessage("Le renouvellement doit être un booléen"),

  // Validation de l'ID
  param("id") //  Verifie et valide les champs envoyes dans les paramètres d'URL (req.params).
    .optional()
    .isInt({ min: 1 })
    .withMessage("L'ID doit être un entier positif"),
];

// Exportation des rules de validation de la prescription
export default prescriptionRules;
