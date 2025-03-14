import { Employe } from "../models/relations.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

// 1. Fonction pour la creation de compte
export const register = async (req, res) => {
  // Validation des entrées
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Données invalides", errors: errors.array() });
  }

  try {
    // Extraction des données
    const {
      nom,
      prenom,
      date_de_naissance,
      nas,
      courriel,
      password,
      telephone,
      adresse,
      id_role,
    } = req.body;

    // Vérifier si l'employé existe déjà
    const employeFound = await Employe.findOne({ where: { courriel } });
    if (employeFound) {
      return res
        .status(400)
        .json({ message: "Cet employé est déjà enregistré." });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel employé
    const nouvelEmploye = await Employe.create({
      nom,
      prenom,
      date_de_naissance,
      nas,
      courriel,
      password: hashedPassword,
      telephone,
      adresse,
      id_role,
    });

    // Répondre avec un message de succès
    res.status(201).json({
      message: "Employé enregistré avec succès",
      employe: nouvelEmploye,
      data: { id: nouvelEmploye.id, nom: nouvelEmploye.nom },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erreur lors de l'enregistrement de l'employé",
      error: error.message,
    });
  }
};

// 2. Fonction pour la connexion
export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { courriel, password } = req.body;

  try {
    // Recherche de l'employé par son courriel
    const employeFound = await Employe.findOne({ where: { courriel } });

    if (!employeFound) {
      return res.status(404).json({
        message: "Cet employé n'est pas enregistré.",
      });
    }

    // Comparaison du mot de passe envoyé avec le mot de passe crypté
    const mdpCorrect = await bcrypt.compare(password, employeFound.password);

    if (!mdpCorrect) {
      return res.status(401).json({ message: "Mot de passe incorrect." });
    }

    // Création de la clé d'accès
    const payload = { id: employeFound.id }; // id_employe
    console.log("Payload avant génération du token:", payload);

    const token = jwt.sign(payload, process.env.JWT_SECRET, {});

    res.status(200).json({
      data: { id: employeFound.id, nom: employeFound.nom }, // id_employe
      token,
      message: `${employeFound.nom} vous vous etes connectes avec success a votre compte`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Erreur lors de la tentative de connexion - ${error.message}`,
    });
  }
};
