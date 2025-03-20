// 1. Importer l'entite/model avec ses relations
import { RendezVous, Patient } from "../models/relations.js";

// 2. Importer le middleware de validation
import { validationResult } from "express-validator";

// 3. Lister tous les RDV
export const getAllRDV = async (req, res) => {
  try {
    const rdvListe = await RendezVous.findAll({
      include: [
        {
          model: Patient,
          attributes: ["id", "nom", "prenom"], // Attributs spécifiques du modèle associé
        },
      ],
    });

    // Vérifier si la liste est vide
    if (!rdvListe || rdvListe.length === 0) {
      return res.status(404).json({
        message: "Aucun RDV trouvé.",
      });
    }

    return res.status(200).json({
      data: rdvListe,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur : lors de la recuperation des rendez-vous -  ${error.message}`,
    });
  }
};

// 4. Ajouter un nouveau RDV
export const addRDV = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }

  try {
    const newRDV = await RendezVous.create(req.body);
    return res.status(201).json({
      message: "Rendez-vous cree avec succes.",
      data: newRDV,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation du Rndez-vous - ${error.message}`,
    });
  }
};
// 5. Supprimer un RDV
export const delRDV = async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    const rdvFound = await RendezVous.findByPk(id);

    if (!rdvFound) {
      return res.status(404).json({
        message: "Le rendez-vous demande n'existe pas.",
      });
    }
    await rdvFound.destroy();
    return res.status(200).json({
      message: "Rendez-vous supprime avec succes.",
    });
  } catch (error) {
    return res.status(400).json({
      message: `erreur serveur lors de la suppression du rendez-vous - ${error.message}`,
    });
  }
};

// 6. Mettre a jour un RDV
export const updateRDV = async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const rdvFound = await RendezVous.findByPk(id);
    if (!rdvFound) {
      return res.status(404).json({
        message: "Le rendez-vous demande n'existe pas.",
      });
    }

    const updatedRDV = await rdvFound.update(req.body);
    return res.status(200).json({
      message: "Rendez-vous mis a jour avec succes.",
      data: updatedRDV,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression du rendez-vous - ${error.message}`,
    });
  }
};

// 7. Afficher un seul RDV
export const displayRDV = async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    const rdvFound = await RendezVous.findByPk(id);
    if (!rdvFound) {
      return res.status(404).json({
        message: "Le rendez-vous demande n'existe pas.",
      });
    }
    return res.status(200).json({
      data: rdvFound,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation du rendez-vous - ${error.message}`,
    });
  }
};
