// 1. Importer le midleweare de validation avec les 2 methodes body() et param() pour valider les entrees
import { body, param } from "express-validator";

const routeRules = [
  // Valider le titre
  body("Titre")
    .isIn(["Administrateur", "Medecin", "sudo"])
    .withMessage(
      "Le type du rôle doit être soit 'administrateur', 'medecin' ou ''sudo"
    ),

  // Valider la specialite
  body("Specialite").notEmpty().withMessage("La spécialité est obligatoire"),

  // Validation de l'ID
  param("id") //  Verifie et valide les champs envoyes dans les parametres d'URL (req.params).
    .isInt({ min: 1 })
    .withMessage("L'id doit etre un entier positif"),
];

// 2. Exporter les roules de validation des roles
export default routeRules;
