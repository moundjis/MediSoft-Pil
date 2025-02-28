// 1. Importer le midleweare de validation avec les 2 methodes body() et param() pour valider les entrees
import { body, param } from "express-validator";

const rendezVousRules = [
  // Validation de la date
  body("date")
    .exists()
    .withMessage("La date est obligatoire")
    .isISO8601()
    .withMessage("La date doit être au format YYYY-MM-DD")
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("La date doit être au format YYYY-MM-DD"),

  // Validation de l'heure
  body("heure")
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
    .exists()
    .withMessage("Le type de rendez-vous est obligatoire")
    .isIn(["consultation", "suivi", "urgence"])
    .withMessage(
      "Le type de rendez-vous doit être 'consultation', 'suivi', ou 'urgence'"
    ),

  // Validation du statut du rendez-vous
  body("status_rdv")
    .exists()
    .withMessage("Le statut du rendez-vous est obligatoire")
    .isIn(["en attente", "confirmé", "annulé", "terminé"])
    .withMessage(
      "Le statut du rendez-vous doit être 'en attente', 'confirmé', 'annulé', ou 'terminé'"
    ),

  // Validation de l'ID
  param("id") //  Verifie et valide les champs envoyes dans les parametres d'URL (req.params).
    .isInt({ min: 1 })
    .withMessage("L'ID doit être un entier positif"),
];

// 2. Exporter les roules de validation du rendez-vous
export default rendezVousRules;
