// 1. Importer l'entite/model avec ses relations
import { Prescription } from "../models/relations.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Lister toutes les prescriptions
export const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptionListe = await Prescription.findAll();
    // 3.1 Afficher la liste des prescriptions, sinon -> Message erreur
    return res.status(200).json({ data: prescriptionListe });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des prescriptions - ${error.message}`,
    });
  }
};

// 4. Ajouter une nouvelle prescription
export const addPrescription = async (req, res) => {
  // 4.1 Verification des erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }

  try {
    // 4.2 Creer une nouvelle prescription a partir des attributs passes dans la requete BODY, sinon -> Message d'erreur
    const newPrescription = await Prescription.create(req.body);
    return res.status(201).json({
      message: "Prescription creee avec succes.",
      data: newPrescription,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation de la prescription - ${error.message}`,
    });
  }
};

// 5. Supprimer une prescription
export const delPrescription = async (req, res) => {
  // 5.1 Recuperer le ID de la prescription a partir de l'URL passe dans PARAMS
  const id = Number(req.params.id);

  // 5.2 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    // 5.3 Rechercher la prescription par son ID
    const prescriptionFound = await Prescription.findByPk(id);
    // 5.4 Verifier si la prescription n'existe pas. sinon -> supprimer la prescription
    if (!prescriptionFound) {
      return res.status(404).json({
        message: "La prescription demandee n'existe pas.",
      });
    }
    // 5.5 Supprimer la prescription, sinon -> Message d'erreur
    await prescriptionFound.destroy();
    return res
      .status(200)
      .json({ message: "Prescription supprimee avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression de la prescription - ${error.message}`,
    });
  }
};

// 6. Mettre a jour une prescription
export const updatePrescription = async (req, res) => {
  // 6.1 Recuperer le ID de la prescription a partir de l'URL passe dans PARAMS
  const id = Number(req.params.id);

  // 6.2 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    // 6.3 Rechercher la prescription par son ID
    const prescriptionFound = await Prescription.findByPk(id);
    // 6.4 Verifier si la prescription n'existe pas. sinon -> Mettre a jour la prescription
    if (!prescriptionFound) {
      return res
        .status(404)
        .json({ message: "La prescription demandee n'existe pas." });
    }

    // if (Object.keys(req.body).length === 0) {
    //   return res
    //     .status(400)
    //     .json({ message: "Aucune donnee fournie pour la mise a jour." });
    // }

    // 6.5 Mettre a jour la prescription, sinon -> Message d'erreur
    const updatedPrescription = await prescriptionFound.update(req.body);
    return res.status(200).json({
      message: "Prescription mise a jour avec succes.",
      data: updatedPrescription,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la mise a jour de la prescription - ${error.message}`,
    });
  }
};

// 7. Afficher une seule prescription
export const displayPrescription = async (req, res) => {
  // 7.1 Recuperer le ID de la prescription a partir de l'URL passe dans PARAMS
  const id = Number(req.params.id);

  // 7.2 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    // 7.3 Rechercher la prescription par son ID
    const prescriptionFound = await Prescription.findByPk(id);

    // 7.4 Verifier si la prescription n'existe pas. sinon -> Afficher la prescription selectionnee
    if (!prescriptionFound) {
      return res
        .status(404)
        .json({ message: "La prescription demandee n'existe pas." });
    }
    return res.status(200).json({ data: prescriptionFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation de la prescription - ${error.message}`,
    });
  }
};
