// 1. Importer l'entité/modèle avec ses relations
import { Patient } from "../models/relations.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Ajouter un nouveau patient
export const addPatient = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Données invalides", errors: errors.array() });
  }
  try {
    const {
      Nom,
      Prenom,
      Date_de_naissance,
      NAS,
      Courriel,
      Telephone,
      Adresse,
      ID_Employe,
      ID_Dossier_Medical,
    } = req.body;

    // Créer un nouveau patient
    const newPatient = await Patient.create({
      Nom,
      Prenom,
      Date_de_naissance,
      NAS,
      Courriel,
      Telephone,
      Adresse,
      ID_Employe,
      ID_Dossier_Medical,
    });

    return res.status(201).json({
      message: "Patient créé avec succès.",
      data: newPatient,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la création du patient - ${error.message}`,
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
    const patientFound = await Patient.findByPk(id, {
      include: "DossierMedical", // Inclure le dossier médical associé
    });

    if (!patientFound) {
      return res.status(404).json({ message: "Patient introuvable" });
    }

    return res.status(200).json({ data: patientFound });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la récupération du patient - ${error.message}`,
    });
  }
};

// 5. Lister tous les patients
export const getAllPatients = async (req, res) => {
  try {
    const patientListe = await Patient.findAll({
      include: "DossierMedical",
    });
    return res.status(200).json({ data: patientListe });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la récupération des patients - ${error.message}`,
    });
  }
};

// 6. Modifier un patient
export const updatePatient = async (req, res) => {
  const id = Number(req.params.id);

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
    const {
      Nom,
      Prenom,
      Date_de_naissance,
      NAS,
      Courriel,
      Telephone,
      Adresse,
      ID_Employe,
      ID_Dossier_Medical,
    } = req.body;

    const patientFound = await Patient.findByPk(id);

    if (!patientFound) {
      return res.status(404).json({ message: "Patient introuvable" });
    }

    patientFound.Nom = Nom || patientFound.Nom;
    patientFound.Prenom = Prenom || patientFound.Prenom;
    patientFound.Date_de_naissance =
      Date_de_naissance || patientFound.Date_de_naissance;
    patientFound.NAS = NAS || patientFound.NAS;
    patientFound.Courriel = Courriel || patientFound.Courriel;
    patientFound.Telephone = Telephone || patientFound.Telephone;
    patientFound.Adresse = Adresse || patientFound.Adresse;
    patientFound.ID_Employe = ID_Employe || patientFound.ID_Employe;
    patientFound.ID_Dossier_Medical =
      ID_Dossier_Medical || patientFound.ID_Dossier_Medical;

    await patientFound.save();

    return res.status(200).json({ message: "Patient modifié avec succès." });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res
        .status(400)
        .json({ message: "Données invalides", errors: error.errors });
    }
    return res.status(500).json({
      message: `Erreur serveur lors de la modification du patient - ${error.message}`,
    });
  }
};

// 7. Supprimer un patient
export const delPatient = async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const patientFound = await Patient.findByPk(id);

    if (!patientFound) {
      return res.status(404).json({ message: "Patient introuvable" });
    }
    await patientFound.destroy();
    return res.status(200).json({ message: "Patient supprimé avec succès." });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression du patient - ${error.message}`,
    });
  }
};

export default {
  addPatient,
  displayPatient,
  getAllPatients,
  updatePatient,
  delPatient,
};
