// 1. Importer le midleweare de validation avec les 2 methodes body() et param() pour valider les entrees
import { body, param } from "express-validator";

const prescriptionRules = [
 

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
    .exists()
    .withMessage("La note est obligatoire")
    .isString()
    .withMessage("La note doit être une chaîne de caractères")
    .isLength({ max: 250 })
    .withMessage("La note ne peut pas dépasser 250 caractères"),

  // Validation du renouvellement
  body("renouvellement")
    .optional()
    .isBoolean()
    .withMessage("Le renouvellement doit être un oui ou non")
    .toBoolean(), // Convertir la valeur en booléen

  // Validation de l'ID de l'ordonnance
  body("id_ordonnance")
    .exists()
    .withMessage("L'ID de l'ordonnance est obligatoire")
    
];

// 2. Exporter les roules de validation de la prescription
export default prescriptionRules;
