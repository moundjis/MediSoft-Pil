import { Employe, Role } from "../models/relations.js";
import jwt from "jsonwebtoken";

// Middleware pour vérifier si un utilisateur a les bons rôles
const autoriser = (roles) => async (req, res, next) => {
  // 1. Vérifier la présence et le format du token
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    return res
      .status(401)
      .json({ message: "Format de token invalide ou manquant." });
  }

  // 2. Extraire le token sans la partie Bearer
  const token = req.headers.authorization.split(" ")[1];

  try {
    // 3. Décoder le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const id = decoded.id_employe;

    // 4. Chercher l'employé dans la base de données
    const employeFound = await Employe.findByPk(id);
    if (!employeFound) {
      return res
        .status(404)
        .json({ message: "Cet employé n'est pas enregistré." });
    }

    // 5. Récupérer le rôle de l'employé
    const RoleEmploye = await Role.findByPk(employeFound.id_role);
    if (!RoleEmploye) {
      return res
        .status(404)
        .json({ message: "Le rôle de cet employé n'est pas enregistré." });
    }

    // 6. Vérifier si l'employé a l'un des rôles autorisés
    const RoleTitle = RoleEmploye.titre.toLowerCase();
    const hasRole = roles.map((role) => role.toLowerCase()).includes(RoleTitle);

    // 7. Si l'employé a le rôle nécessaire, passer au middleware suivant
    if (hasRole) {
      req.user = decoded; // Ajouter le payload à la requête
      next();
    } else {
      // 8. Si l'employé n'a pas le rôle, retourner une erreur 403
      return res.status(403).json({
        message: "Vous n'êtes pas autorisé à accéder à cette route.",
      });
    }
  } catch (error) {
    // 9. En cas d'erreur dans la requête, retourner une erreur 403
    let message = "Erreur lors de la vérification des autorisations.";
    if (error.name === "JsonWebTokenError") {
      message = "Token invalide.";
    } else if (error.name === "TokenExpiredError") {
      message = "Token expiré.";
    }

    res.status(403).json({ message });
  }
};

export default autoriser;
