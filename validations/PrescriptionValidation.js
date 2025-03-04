// 1. Importer le midleweare de validation avec les 2 methodes body() et param() pour valider les entrees
import { body, param } from "express-validator";

const prescriptionRules = [
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

  // // Validation de la note
  // body("note_medecin")
  //   .optional()
  //   .withMessage("La note est obligatoire")
  //   .isString()
  //   .withMessage("La note doit être une chaîne de caractères"),

  // Validation du renouvellement
  body("renouvellement")
    .optional()
    .isBoolean()
    .withMessage("Le renouvellement doit être un booléen"),

  // Validation de l'ID
  param("id") //  Verifie et valide les champs envoyes dans les parametres d'URL (req.params).
    .isInt({ min: 1 })
    .withMessage("L'ID doit être un entier positif"),
];

// 2. Exporter les roules de validation de la prescription
export default prescriptionRules;
