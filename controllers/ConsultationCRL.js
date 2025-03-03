// 1. Importer l'entite/model avec ses relations
import { Consultation } from "../models/Consultation.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Lister toutes les consultations
export const getAllConsultations = async (req, res) => {
  try {
    const consultationListe = await Consultation.findAll();
    // 3.1 Afficher la liste des consultations, sinon -> Message erreur
    return res.status(200).json({ data: consultationListe });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des consultations - ${error.message}`,
    });
  }
};

// 4. Ajouter une nouvelle consultation
export const addConsultation = async (req, res) => {
  // 4.1 Verification des erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }

  try {
    // 4.2 Creer une nouvelle consultation a partir des attributs passes dans la requete BODY, sinon -> Message d'erreur
    const newConsultation = await Consultation.create(req.body);
    return res.status(201).json({
      message: "Consultation creee avec succes.",
      data: newConsultation,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation de la consultation - ${error.message}`,
    });
  }
};

// 5. Supprimer une consultation
export const delConsultation = async (req, res) => {
  // 5.1 Recuperer le ID de la consultation a partir de l'URL passe dans PARAMS
  const id = Number(req.params.ID_Consultation);

  // 5.2 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    // 5.3 Rechercher la consultation par son ID
    const consultationFound = await Consultation.findByPk(id);
    // 5.4 Verifier si la consultation n'existe pas. sinon -> supprimer la consultation
    if (!consultationFound) {
      return res.status(404).json({
        message: "La consultation demande n'existe pas.",
      });
    }
    // 5.5 Supprimer la consultation, sinon -> Message d'erreur
    await consultationFound.destroy();
    return res
      .status(200)
      .json({ message: "Consultation supprimee avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression de la consultation - ${error.message}`,
    });
  }
};

// 6. Mettre a jour une consultation
export const updateConsultation = async (req, res) => {
  // 6.1 Recuperer le ID de la consultation a partir de l'URL passe dans PARAMS
  const id = Number(req.params.ID_Consultation);

  // 6.2 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    // 6.3 Rechercher la consultation par son ID
    const consultationFound = await Consultation.findByPk(id);
    // 6.4 Verifier si la consultation n'existe pas. sinon -> Mettre a jour la consultation
    if (!consultationFound) {
      return res
        .status(404)
        .json({ message: "La consultation demande n'existe pas." });
    }
    // 6.5 Mettre a jour la consultation, sinon -> Message d'erreur
    const updatedConsultation = await consultationFound.update(req.body);
    return res.status(200).json({
      message: "Consultation mise a jour avec succes.",
      data: updatedConsultation,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la mise a jour de la consultation - ${error.message}`,
    });
  }
};

//7. Lister toutes les consultations d'un patient
export const getConsultationsByPatient = async (req, res) => {
  const id = Number(req.params.ID_Patient);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const consultationsFound = await Consultation.findAll({
      where: { ID_Patient: id },
    });
    return res.status(200).json({
      message: "Consultations trouvees avec succes.",
      data: consultationsFound,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des consultations - ${error.message}`,
    });
  }
};

// 8. Lister toutes les consultations d'un medecin
export const getConsultationsByMedecin = async (req, res) => {
  const id = Number(req.params.ID_Medecin);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const consultationsFound = await Consultation.findAll({
      where: { ID_Medecin: id },
    });
    return res.status(200).json({
      message: "Consultations trouvees avec succes.",
      data: consultationsFound,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des consultations - ${error.message}`,
    });
  }
};

// 9.Afficher une seule consultation
export const displayConsultation = async (req, res) => {
  const id = Number(req.params.ID_Consultation);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const consultationFound = await Consultation.findByPk(id);
    if (!consultationFound) {
      return res
        .status(404)
        .json({ message: "La consultation demande n'existe pas." });
    }
    return res.status(200).json({ data: consultationFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation de la consultation - ${error.message}`,
    });
  }
};
export default {
  getAllConsultations,
  addConsultation,
  delConsultation,
  updateConsultation,
  getConsultationsByPatient,
  getConsultationsByMedecin,
  displayConsultation,
};
