// 1. On importe l'entite/model "Ordonnance" avec ses relations
import { Ordonnance } from "../models/relations.js";
import { validationResult } from "express-validator";

// 3.  Ajouter une nouvelle Ordonnance
export const addOrdonnance = async (req, res) => {
  // Validation des entrées avec express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const id = req.body.id;
    const idExists = await Ordonnance.findByPk(id);

    if (idExists) {
      return res.status(400).json({ message: "Cet id existe deja" });
    }

    const newOrdonnance = await Ordonnance.create(req.body);
    return res.status(201).json({
      message: "Ordonnance cree avec succes.",
      data: newOrdonnance,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation de l'ordonnance - ${error.message}`,
    });
  }
};

// 4. Afficher une Ordonnance spécifique par ID
export const displayOrdonnance = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const ordonnanceFound = await Ordonnance.findByPk(id);

    if (!ordonnanceFound) {
      return res.status(404).json({ message: "Ordonnance introuvable" });
    }
    return res.status(200).json({ data: ordonnanceFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation de l'ordonnance - ${error.message}`,
    });
  }
};

// 5. lister toutes les Ordonnances
export const getAllOrdonnances = async (req, res) => {
  try {
    const ordannanceListe = await Ordonnance.findAll();

    return res.status(200).json({ data: ordannanceListe });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des ordonnances - ${error.message}`,
    });
  }
};

// 5. Modifier une Ordonnance
export const updateOrdonnance = async (req, res) => {
  // 6.1 Verifier si le ID n'est pas un nombre et entier
  const id = Number(req.params.id);
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
    // 6.2 Rechercher l'ordonnance par son ID
    const ordonnanceFound = await Ordonnance.findByPk(id);
    // 6.3 Verifier si l'ordonnnce n'existe pas. sinon -> Modifier l'ordonnance
    if (!ordonnanceFound) {
      return res.status(404).json({ message: "Ordonnance introuvable" });
    }
    await ordonnanceFound.update(req.body);
    return res
      .status(200)
      .json({ message: "Ordonnance modifiee avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la modification de l'ordonnance - ${error.message}`,
    });
  }
};

// 7. Supprimer une Ordonnance
export const delOrdonnance = async (req, res) => {
  const id = Number(req.params.id);
  // 7.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    // 7.2 Rechercher l'ordonnance par son ID
    const ordonnanceFound = await Ordonnance.findByPk(id);
    // 7.3 Verifier si l'ordonnance n'existe pas. sinon -> supprimer l'ordonnance
    if (!ordonnanceFound) {
      return res.status(404).json({ message: "Ordonnance introuvable" });
    }
    await ordonnanceFound.destroy();
    return res
      .status(200)
      .json({ message: "Ordonnance supprimee avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression de l'ordonnance - ${error.message}`,
    });
  }
};
