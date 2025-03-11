// 1. Importer l'entite/model avec ses relations
import { DossierMedical } from "../models/relations.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Ajouter un nouveau dossiermedical
export const addDossierMedical = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }
  try {
    // 1.2 Recuperer et verifier si le id existe deja
    const { id } = req.body;
    const idExists = await DossierMedical.findOne({ where: { courriel } });

    if (idExists) {
      return res.status(400).json({ message: "Cette id existe deja" });
    }
    const newDossierMedical = await DossierMedical.create(req.body);
    return res.status(201).json({
      message: "Dossier Medical cree avec succes.",
      data: newDossierMedical,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation du dossier medical - ${error.message}`,
    });
  }
};

// 4. Afficher un seul Dossier Medical
export const displayDossierMedical = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const dossierMedicalFound = await dossiermedical.findByPk(id);
    if (!dossierMedicalFound) {
      return res.status(404).json({ message: "Dossier Medical introuvable" });
    }
    return res.status(200).json({ data: dossierMedicalFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation du dossier medical - ${error.message}`,
    });
  }
};

// 5. Lister tous les Dossier Medicaux
export const getallDossierMedical = async (req, res) => {
  try {
    const dossiermedicalListe = await DossierMedical.findAll();
    // 5.1 Afficher la liste des Dossiers Medicaux, sinon -> Message erreur
    return res.status(200).json({ data: dossiermedicalListe });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des dossiers medicaux - ${error.message}`,
    });
  }
};

// 6. Modifier un dossier medical
export const updateDossierMedical = async (req, res) => {
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
    // 6.2 Rechercher le dossier medical par son ID
    const dossiermedicalFound = await DossierMedical.findByPk(id);
    // 6.3 Verifier si l'dossiermedical n'existe pas. sinon -> Modifier l'dossiermedical
    if (!dossiermedicalFound) {
      return res.status(404).json({ message: "Dossiermedical introuvable" });
    }
    await dossiermedicalFound.update(req.body);
    return res
      .status(200)
      .json({ message: "Dossiermedical modifie avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la modification du dossier medical - ${error.message}`,
    });
  }
};

// 7. Supprimer un dossier medical
export const delDossierMedical = async (req, res) => {
  const id = Number(req.params.id);
  // 7.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    // 7.2 Rechercher le dossier medical par son ID
    const dossiermedicalFound = await DossierMedical.findByPk(id);
    // 7.3 Verifier si l'dossiermedical n'existe pas. sinon -> supprimer l'dossiermedical
    if (!dossiermedicalFound) {
      return res.status(404).json({ message: "dossier medical introuvable" });
    }
    await dossiermedicalFound.destroy();
    return res
      .status(200)
      .json({ message: "dossier medical supprime avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression de l'dossiermedical - ${error.message}`,
    });
  }
};
