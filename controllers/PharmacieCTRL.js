// 1. Importer le modèle Pharmacie
import { Pharmacie } from "../models/relations.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Ajouter une nouvelle pharmacie
export const addPharmacie = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Données invalides",
      errors: errors.array(),
    });
  }
  try {
    const { email } = req.body;
    const emailExists = await Pharmacie.findOne({ where: { email } });

    if (emailExists) {
      return res.status(400).json({ message: "Cet email existe déjà" });
    }
    const newPharmacie = await Pharmacie.create(req.body);
    return res.status(201).json({
      message: "Pharmacie créée avec succès.",
      data: newPharmacie,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la création de la pharmacie - ${error.message}`,
    });
  }
};

// 4. Afficher une seule pharmacie
export const displayPharmacie = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const pharmacieFound = await Pharmacie.findByPk(id);
    if (!pharmacieFound) {
      return res.status(404).json({ message: "Pharmacie introuvable" });
    }
    return res.status(200).json({ data: pharmacieFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la récupération de la pharmacie - ${error.message}`,
    });
  }
};

// 5. Lister toutes les pharmacies
export const getAllPharmacies = async (req, res) => {
  try {
    const pharmaciesList = await Pharmacie.findAll();
    return res.status(200).json({ data: pharmaciesList });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la récupération des pharmacies - ${error.message}`,
    });
  }
};

// 6. Modifier une pharmacie
export const updatePharmacie = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Données invalides",
      errors: errors.array(),
    });
  }
  try {
    const pharmacieFound = await Pharmacie.findByPk(id);
    if (!pharmacieFound) {
      return res.status(404).json({ message: "Pharmacie introuvable" });
    }
    await pharmacieFound.update(req.body);
    return res.status(200).json({ message: "Pharmacie modifiée avec succès." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la modification de la pharmacie - ${error.message}`,
    });
  }
};

// 7. Supprimer une pharmacie
export const delPharmacie = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const pharmacieFound = await Pharmacie.findByPk(id);
    if (!pharmacieFound) {
      return res.status(404).json({ message: "Pharmacie introuvable" });
    }
    await pharmacieFound.destroy();
    return res
      .status(200)
      .json({ message: "Pharmacie supprimée avec succès." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression de la pharmacie - ${error.message}`,
    });
  }
};
