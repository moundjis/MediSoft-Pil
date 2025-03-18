import { body, param } from "express-validator";

const roleRules = [
  // Valider le titre
  body("titre")
    .exists()
    .withMessage("Le titre est obligatoire.")
    .isIn([
      "sudo",
      "Administrateur",
      "Cardiologue",
      "Ophtalmologue",
      "Dermatologue",
      "Dentiste",
    ])
    .withMessage(
      "Le titre de l'employe doit etre : 'sudo','Administrateur', 'Cardiologue', 'Ophtalmologue', 'Dermatologue' ou 'Dentiste'."
    ),
];

export default roleRules;
