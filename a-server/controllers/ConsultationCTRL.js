// 1. Importer l'entite/model avec ses relations
import { Consultation } from "../models/relations.js";
import { Patient, Employe } from "../models/relations.js"; // Importez les modèles 
// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Ajouter une nouvelle consultation
export const addConsultation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }

  try {
    // Récupérer les données de la requête
    const { diagnostic, note, recommendations, patientName, employeName } = req.body;

    // 1. Rechercher l'id du patient par son nom
    const patient = await Patient.findOne({ where: { nom: patientName } });
    if (!patient) {
      return res.status(404).json({ message: "Patient non trouvé." });
    }
    const id_patient = patient.id;

    // 2. Rechercher l'id de l'employé par son nom
    const employe = await Employe.findOne({ where: { nom: employeName } });
    if (!employe) {
      return res.status(404).json({ message: "Employé non trouvé." });
    }
    const id_employe = employe.id;

    // 3. Créer la consultation avec les id trouvés
    const newConsultation = await Consultation.create({
      diagnostic,
      note,
      recommendations,
      id_patient,
      id_employe,
    });

    return res.status(201).json({
      message: "Consultation créée avec succès.",
      data: newConsultation,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la création de la consultation - ${error.message}`,
    });
  }
};

// 4. Afficher une seul consultation
export const displayConsultation = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const consultationFound = await Consultation.findByPk(id);
    if (!consultationFound) {
      return res.status(404).json({ message: "Consultation introuvable" });
    }
    return res.status(200).json({ data: consultationFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation de la consultation - ${error.message}`,
    });
  }
};

// 5. Lister toutes les consultations
export const getAllConsultations = async (req, res) => {
  try {
    const consultationListe = await Consultation.findAll();
    // 5.1 Afficher la liste des employes, sinon -> Message erreur
    return res.status(200).json({ data: consultationListe });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des Consultations - ${error.message}`,
    });
  }
};

// 6. Modifier une consultation
export const updateConsultation = async (req, res) => {
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
    // 6.2 Rechercher la consultation par son ID
    const consultationFound = await Consultation.findByPk(id);
    // 6.3 Verifier si la consultation n'existe pas. sinon -> Modifier la consultation
    if (!consultationFound) {
      return res.status(404).json({ message: "Consultation introuvable" });
    }
    await consultationFound.update(req.body);
    return res
      .status(200)
      .json({ message: "Consultation modifie avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la modification de la consultation - ${error.message}`,
    });
  }
};

// 7. Supprimer un consultation
export const delConsultation = async (req, res) => {
  const id = Number(req.params.id);
  // 7.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    // 7.2 Rechercher la consultation par son ID
    const consultationFound = await Consultation.findByPk(id);
    // 7.3 Verifier si l'employe n'existe pas. sinon -> supprimer l'employe
    if (!consultationFound) {
      return res.status(404).json({ message: "Consultation introuvable" });
    }
    await consultationFound.destroy();
    return res
      .status(200)
      .json({ message: "Consultation supprime avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression de la consultation - ${error.message}`,
    });
  }
};
