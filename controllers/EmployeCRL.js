// 1. Importer l'entite/model avec ses relations
import { Employe } from "../models/Employe.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Ajouter un nouveau employe
export const addEmploye = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }
  try {
    const newEmploye = await Employe.create(req.body);
    return res.status(201).json({
      message: "Employe cree avec succes.",
      data: newEmploye,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation de l'employe - ${error.message}`,
    });
  }
};

// 4. Afficher un seul employe
export const displayEmploye = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const employeFound = await Employe.findByPk(id);
    if (!employeFound) {
      return res.status(404).json({ message: "Employe introuvable" });
    }
    return res.status(200).json({ data: employeFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation de l'employe - ${error.message}`,
    });
  }
};

// 5. Lister tous les employes
export const getAllEmployes = async (req, res) => {
  try {
    const employeListe = await Employe.findAll();
    // 5.1 Afficher la liste des employes, sinon -> Message erreur
    return res.status(200).json({ data: employeListe });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des employes - ${error.message}`,
    });
  }
};

// 6. Modifier un employe
export const updateEmploye = async (req, res) => {
  const id = Number(req.params.id);
  // 6.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }
  try {
    // 6.2 Rechercher l'employe par son ID
    const employeFound = await Employe.findByPk(id);
    // 6.3 Verifier si l'employe n'existe pas. sinon -> Modifier l'employe
    if (!employeFound) {
      return res.status(404).json({ message: "Employe introuvable" });
    }
    await employeFound.update(req.body);
    return res.status(200).json({ message: "Employe modifie avec succes." });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res
        .status(400)
        .json({ message: "Donnees invalides", errors: error.errors });
    }
    return res.status(500).json({
      message: `Erreur serveur lors de la modification de l'employe - ${error.message}`,
    });
  }
};

// 7. Supprimer un employe
export const delEmploye = async (req, res) => {
  const id = Number(req.params.id);
  // 7.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    // 7.2 Rechercher l'employe par son ID
    const employeFound = await Employe.findByPk(id);
    // 7.3 Verifier si l'employe n'existe pas. sinon -> supprimer l'employe
    if (!employeFound) {
      return res.status(404).json({ message: "Employe introuvable" });
    }
    await employeFound.destroy();
    return res.status(200).json({ message: "Employe supprime avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression de l'employe - ${error.message}`,
    });
  }
};

export default {
  addEmploye,
  displayEmploye,
  getAllEmployes,
  updateEmploye,
  delEmploye,
};
