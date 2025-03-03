// 1. Importer l'entite/model avec ses relations
import { DossierMedical } from "../models/DossierMedical.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Ajouter un nouveau dossier medical
export const addDossierMedical = async (req, res) => {
  // 3.1 Verification des erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }
  try {
    // 3.2 Creer un nouveau dossier medical a partir des attributs passes dans la requete BODY, sinon -> Message d'erreur
    const newDossierMedical = await DossierMedical.create(req.body);
    return res.status(201).json({
      message: "Dossier medical cree avec succes.",
      data: newDossierMedical,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation du dossier medical - ${error.message}`,
    });
  }
};

// 4. Lister tous les dossiers medicaux
export const getAllDossiersMedicaux = async (req, res) => {
  try {
    const dossierMedicalListe = await DossierMedical.findAll();
    // 4.1 Afficher la liste des dossiers medicaux, sinon -> Message erreur
    return res.status(200).json({ data: dossierMedicalListe });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des dossiers medicaux - ${error.message}`,
    });
  }
};

// 5. Afficher un seul dossier medical
export const displayDossierMedical = async (req, res) => {
  const id = Number(req.params.ID_Dossier_Medical);

  // 5.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    // 5.2 Rechercher le dossier medical par son ID
    const dossierMedicalFound = await DossierMedical.findByPk(id);

    // 5.3 Verifier si le dossier medical n'existe pas. sinon -> Afficher le dossier medical selectionne
    if (!dossierMedicalFound) {
      return res.status(404).json({ message: "Dossier medical introuvable" });
    }
    return res.status(200).json({ data: dossierMedicalFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation du dossier medical - ${error.message}`,
    });
  }
};

// 6. Supprimer un dossier medical
export const delDossierMedical = async (req, res) => {
  const id = Number(req.params.ID_Dossier_Medical);

  // 6.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    // 6.2 Rechercher le dossier medical par son ID
    const dossierMedicalFound = await DossierMedical.findByPk(id);
    // 6.3 Verifier si le dossier medical n'existe pas. sinon -> supprimer le dossier medical
    if (!dossierMedicalFound) {
      return res.status(404).json({ message: "Dossier medical introuvable" });
    }
    await dossierMedicalFound.destroy();
    return res
      .status(200)
      .json({ message: "Dossier medical supprime avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression du dossier medical - ${error.message}`,
    });
  }
};

// 7. Modifier un dossier medical
export const updateDossierMedical = async (req, res) => {
  const id = Number(req.params.ID_Dossier_Medical);
  // 7.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  // 7.2 Verification des erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }
  try {
    // 7.3 Rechercher le dossier medical par son ID
    const dossierMedicalFound = await DossierMedical.findByPk(id);
    // 7.4 Verifier si le dossier medical n'existe pas. sinon -> Modifier le dossier medical
    if (!dossierMedicalFound) {
      return res.status(404).json({ message: "Dossier medical introuvable" });
    }
    await dossierMedicalFound.update(req.body);
    return res
      .status(200)
      .json({ message: "Dossier medical modifie avec succes." });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res
        .status(400)
        .json({ message: "Donnees invalides", errors: error.errors });
    } else {
      return res.status(500).json({
        message: `Erreur serveur lors de la modification du dossier medical - ${error.message}`,
      });
    }
  }
};

// 8. Afficher le dossier medical d'un patient
export const displayDossierMedicalPatient = async (req, res) => {
  const id = Number(req.params.ID_Patient);

  // 8.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    // 8.2 Rechercher le dossier medical par son ID
    const dossierMedicalFound = await DossierMedical.findOne({
      where: { ID_Patient: id },
    });
    // 8.3 Verifier si le dossier medical n'existe pas. sinon -> Afficher le dossier medical selectionne
    if (!dossierMedicalFound) {
      return res.status(404).json({ message: "Dossier medical introuvable" });
    }
    return res.status(200).json({ data: dossierMedicalFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation du dossier medical - ${error.message}`,
    });
  }
};

export default {
  addDossierMedical,
  getAllDossiersMedicaux,
  displayDossierMedical,
  delDossierMedical,
  updateDossierMedical,
  displayDossierMedicalPatient,
};
