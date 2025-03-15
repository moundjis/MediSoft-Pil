// 1. Importer le midleweare de validation avec les 2 methodes body() et param() pour valider les entrees
import { body, param } from "express-validator";

const rendezVousRules = [
  // Validation de l'ID
  param("id") //  Verifie et valide les champs envoyes dans les parametres d'URL (req.params).
    .isInt({ min: 1 })
    .withMessage("L'ID doit être un entier positif"),

  // Validation de la date
  body("date_rdv")
    .exists()
    .withMessage("La date est obligatoire")
    .isISO8601()
    .withMessage("La date doit être au format YYYY-MM-DD"),

  // Validation de l'heure
  body("heure_rdv")
    .exists()
    .withMessage("L'heure est obligatoire")
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("L'heure doit être au format HH:MM"),

  // Validation de la note du médecin (facultative)
  body("note_medecin")
    .optional()
    .isString()
    .withMessage("La note du médecin doit être une chaîne de caractères"),

  // Validation du type de rendez-vous
  body("type_rdv")
    .optional()
    .isIn(["consultation", "suivi", "urgence"])
    .withMessage(
      "Le type de rendez-vous doit être 'consultation', 'suivi', ou 'urgence'"
    ),

  // Validation du statut du rendez-vous
  body("status_rdv")
    .optional()
    .isIn(["en attente", "confirmé", "annulé", "terminé"])
    .withMessage(
      "Le statut du rendez-vous doit être 'en attente', 'confirmé', 'annulé', ou 'terminé'"
    ),

  // Validation de l'ID du patient
  body("id_patient")
    .exists()
    .withMessage("L'ID du patient est obligatoire")
    .isInt({ min: 1 })
    .withMessage("L'ID du patient doit être un entier positif"),
];

// 2. Exporter les roules de validation du rendez-vous
export default rendezVousRules;
