// 1. Importer l'entite/model avec ses relations
import { Patient } from "../models/relations.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Ajouter un nouveau patient
export const addPatient = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }
  try {
    // 3.1 Recuperer et verifier si le courriel existe deja
    const { courriel } = req.body;
    const courrielExists = await Patient.findOne({ where: { courriel } });

    if (courrielExists) {
      return res.status(400).json({ message: "Ce courriel existe deja" });
    }
    const newPatient = await Patient.create(req.body);
    return res.status(201).json({
      message: "Patient cree avec succes.",
      data: newPatient,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation du patient - ${error.message}`,
    });
  }
};

// 4. Afficher un seul patient
export const displayPatient = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const patientFound = await Patient.findByPk(id);
    if (!patientFound) {
      return res.status(404).json({ message: "Patient introuvable" });
    }
    return res.status(200).json({ data: patientFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation du patient - ${error.message}`,
    });
  }
};

// 5. Lister tous les patients
export const getAllPatients = async (req, res) => {
  try {
    const patientListe = await Patient.findAll();
    // 5.1 Afficher la liste des patients, sinon -> Message erreur
    return res.status(200).json({ data: patientListe });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des patients - ${error.message}`,
    });
  }
};

// 6. Modifier un patient
export const updatePatient = async (req, res) => {
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
    // 6.2 Rechercher le patient par son ID
    const patientFound = await Patient.findByPk(id);
    // 6.3 Verifier si le patient n'existe pas. sinon -> Modifier le patient
    if (!patientFound) {
      return res.status(404).json({ message: "Patient introuvable" });
    }
    await patientFound.update(req.body);
    return res.status(200).json({ message: "Patient modifie avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la modification du patient - ${error.message}`,
    });
  }
};

// 7. Supprimer un patient
export const delPatient = async (req, res) => {
  const id = Number(req.params.id);
  // 7.1 Verifier si le ID n'est pas un nombre et entier
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    // 7.2 Rechercher le patient par son ID
    const patientFound = await Patient.findByPk(id);
    // 7.3 Verifier si le patient n'existe pas. sinon -> supprimer le patient
    if (!patientFound) {
      return res.status(404).json({ message: "Patient introuvable" });
    }
    await patientFound.destroy();
    return res.status(200).json({ message: "Patient supprime avec succes." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression du patient - ${error.message}`,
    });
  }
};
