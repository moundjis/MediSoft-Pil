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
    console.log("Token decode:", decoded); // Debug pour afficher le conteny du token
    const id = decoded.id;
    console.log("ID de l'employé dans le token:", id); // Debug log pour afficher le ID de l'employe

    // 4. Chercher l'employé dans la base de données avec le rôle
    const employeFound = await Employe.findByPk(id, {
      include: [{ model: Role }],
    });

    console.log("Employé trouvé:", employeFound); // Debug log

    if (!employeFound) {
      return res.status(404).json({
        message: "Employé non trouvé !",
      });
    }

    // 5. Vérifier si l'employé a un rôle associé
    if (!employeFound.Role) {
      return res.status(403).json({
        message: "L'employé n'a pas de rôle associé. Accès interdit.",
      });
    }

    // 6. Vérifier si l'employé a l'un des rôles autorisés
    const RoleTitle = employeFound.Role.titre.toLowerCase();
    const hasRole = roles.map((role) => role.toLowerCase()).includes(RoleTitle);

    if (hasRole) {
      req.user = decoded; // Ajouter le payload à la requête
      next();
    } else {
      return res.status(403).json({
        message: `Accès interdit. Vous devez avoir l'un des rôles suivants : ${roles.join(
          ", "
        )}.`,
      });
    }
  } catch (error) {
    // 7. En cas d'erreur dans la requête, retourner une erreur 403
    let message = "Erreur lors de la vérification des autorisations.";
    if (error.name === "JsonWebTokenError") {
      message = "Token invalide.";
    } else if (error.name === "TokenExpiredError") {
      message = "Token expiré.";
    }

    res.status(401).json({ message });
  }
};

export default autoriser;
