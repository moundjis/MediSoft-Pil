// 1. Importer les dépendances nécessaires
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { Employe, Role } from "../models/relations.js";

// 2. Ajouter un nouvel employé avec hachage du mot de passe
export const addEmploye = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Erreur serveur - Données invalides",
      errors: errors.array(),
    });
  }

  try {
    // 2.1 Vérifier si le courriel existe déjà
    const { courriel, password } = req.body;
    const courrielExists = await Employe.findOne({ where: { courriel } });

    if (courrielExists) {
      return res.status(400).json({ message: "Ce courriel existe déjà" });
    }

    // 2.2 Hacher le mot de passe
    const saltRounds = 10; // Nombre de tours de hachage
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 2.3 Créer l'employé avec le mot de passe haché
    const newEmploye = await Employe.create({
      ...req.body,
      password: hashedPassword, // Remplacer le mot de passe en clair par le hash
    });

    return res.status(201).json({
      message: "Employé créé avec succès.",
      data: newEmploye,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la création de l'employé - ${error.message}`,
    });
  }
};

// 3. Fonction de connexion pour vérifier le mot de passe
export const loginEmploye = async (req, res) => {
  const { courriel, password } = req.body;

  try {
    // 3.1 Trouver l'employé par son courriel
    const employe = await Employe.findOne({ where: { courriel } });

    if (!employe) {
      return res.status(404).json({ message: "Employé non trouvé" });
    }

    // 3.2 Comparer le mot de passe fourni avec le hash stocké
    const isPasswordValid = await bcrypt.compare(password, employe.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    // 3.3 Générer un token JWT pour l'authentification
    const token = jwt.sign(
      { id: employe.id, role: employe.id_role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Connexion réussie",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la connexion - ${error.message}`,
    });
  }
};

// 4. Afficher un seul employé
export const displayEmploye = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const employeFound = await Employe.findByPk(id);
    if (!employeFound) {
      return res.status(404).json({ message: "Employé introuvable" });
    }
    return res.status(200).json({ data: employeFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la récupération de l'employé - ${error.message}`,
    });
  }
};

// 5. Lister tous les employés avec leur rôle
export const getAllEmployes = async (req, res) => {
  try {
    const employeListe = await Employe.findAll({
      include: [
        {
          model: Role,
          attributes: ["id", "titre"], // Attributs spécifiques du modèle associé
        },
      ],
    });

    // Vérifier si la liste est vide
    if (!employeListe || employeListe.length === 0) {
      return res.status(404).json({
        message: "Aucun employé trouvé.",
      });
    }

    // Retourner la liste des employés
    return res.status(200).json({ data: employeListe });
  } catch (error) {
    // Retourner un message d'erreur en cas de problème
    return res.status(500).json({
      message: `Erreur serveur lors de la récupération des employés - ${error.message}`,
    });
  }
};

// 6. Modifier un employé
export const updateEmploye = async (req, res) => {
  const id = Number(req.params.id);
  // 6.1 Vérifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Erreur serveur - Données invalides",
      errors: errors.array(),
    });
  }
  try {
    // 6.2 Rechercher l'employé par son ID
    const employeFound = await Employe.findByPk(id);
    // 6.3 Vérifier si l'employé n'existe pas. sinon -> Modifier l'employé
    if (!employeFound) {
      return res.status(404).json({ message: "Employé introuvable" });
    }
    await employeFound.update(req.body);
    return res.status(200).json({ message: "Employé modifié avec succès." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la modification de l'employé - ${error.message}`,
    });
  }
};

// 7. Supprimer un employé
export const delEmploye = async (req, res) => {
  const id = Number(req.params.id);
  // 7.1 Vérifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    // 7.2 Rechercher l'employé par son ID
    const employeFound = await Employe.findByPk(id);
    // 7.3 Vérifier si l'employé n'existe pas. sinon -> supprimer l'employé
    if (!employeFound) {
      return res.status(404).json({ message: "Employé introuvable" });
    }
    await employeFound.destroy();
    return res.status(200).json({ message: "Employé supprimé avec succès." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression de l'employé - ${error.message}`,
    });
  }
};
