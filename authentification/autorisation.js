// 1. Importer le modele Employe

// 2. Middleware pour verifier si un employe a les bons roles

// 2.1 Recuperer l'ID de l'employe depuis le token

// 2.2 Chercher l'employe dans la base de donnees

// 2.3 Recuperer le role de l'employe

// 2.4 Verifier si l'employe a l'un des roles autorises

// 2.5 Si l'employe n'a aucun role, le refuser

// 2.6 Verifier si l'employe a l'un des roles permis

// 2.7 Si l'employe a le role necessaire, passer au middleware suivant

// 2.8 Si l'employe n'a pas le role, retourner une erreur 403

// 2.9 En cas d'erreur dans la requete, retourner une erreur 403

// 1. Importer le modele Employe
import { Employe, Role } from "../models/relations.js";
import jwt from "jsonwebtoken";

// 2. Middleware pour verifier si un utilisateur a les bons rôles
const autoriser = (roles) => async (req, res, next) => {
  try {
    // 2.1 Vérifier si le token est présent
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Accès refusé. Token manquant." });
    }

    // 2.2 Récupérer et vérifier le token
    const token = req.headers.authorization.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.CODE_SECRET);
    } catch (error) {
      return res.status(401).json({ message: "Token invalide ou expiré." });
    }

    const id = decoded.id;

    // 2.3 Chercher l'employé dans la base de données
    const employe = await Employe.findByPk(id);
    if (!employe) {
      return res
        .status(404)
        .json({ message: "Cet employé n'est pas enregistré!" });
    }

    console.log("Employé: ", employe);

    // 2.4 Récupérer le rôle de l'employé
    const employeRole = await Role.findByPk(employe.RoleId);

    if (!employeRole) {
      return res
        .status(404)
        .json({ message: "Le rôle de cet employé n'est pas enregistré!" });
    }

    const employeRoleTitle = employeRole.Titre.toLowerCase();
    console.log("Employé role title: ", employeRoleTitle);

    // 2.5 Vérifier si l'employé a l'un des rôles permis
    const hasRole = roles.some(
      (role) => employeRoleTitle === role.toLowerCase()
    );

    // 2.6 Si l'employé a le rôle nécessaire, passer au middleware suivant
    if (hasRole) {
      return next();
    }

    // 2.7 Si l'employé n'a pas le rôle, retourner une erreur 403
    return res.status(403).json({
      message: "Vous n'êtes pas autorisé à accéder à cette route.",
    });
  } catch (error) {
    // 2.8 En cas d'erreur dans la requête, retourner une erreur 500
    res.status(500).json({ message: "Erreur serveur", erreur: error.message });
  }
};

export default autoriser;
