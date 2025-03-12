// 1. Importer le modèle Pharmacie
import { Pharmacie } from "../models/relations.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Ajouter un nouveau pharmacie
export const addPharmacie = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }
  try {
    // 1.2 Recuperer et verifier si le courriel existe deja
    const { courriel } = req.body;
    const courrielExists = await Pharmacie.findOne({ where: { courriel } });

    if (courrielExists) {
      return res.status(400).json({ message: "Ce courriel existe deja" });
    }
    const newPharmacie = await Pharmacie.create(req.body);
    return res.status(201).json({
      message: "Pharmacie cree avec succes.",
      data: newPharmacie,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation de la pharmacie - ${error.message}`,
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
    // 5.1 Afficher la liste des pharmacies, sinon -> Message erreur
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
  // 6.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Données invalides", errors: errors.array() });
  }
  try {
    // 6.2 Rechercher la pharmacie par son ID
    const pharmacieFound = await Pharmacie.findByPk(id);
    // 6.3 Verifier si la pharmacie n'existe pas. sinon -> Modifier la pharmacie
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
  // 7.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    // 7.2 Rechercher la pharmacie par son ID
    const pharmacieFound = await Pharmacie.findByPk(id);
    // 7.3 Verifier si la pharmacie n'existe pas. sinon -> supprimer la pharmacie
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
