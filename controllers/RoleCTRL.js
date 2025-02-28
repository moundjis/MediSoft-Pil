// 1. Importer l'entite/model avec ses relations
import { Role } from "../models/relations.js";

// 2. Importer le middleware de validation
import { body, validationResult } from "express-validator";

// 3. Lister tous les roles
export const getAllRoles = async (req, res) => {
  try {
    const rolesListe = await Role.findAll();
    return res.status(200).json({
      data: rolesListe,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation des roles - ${error.message}`,
    });
  }
};

// 4. Ajouter un nouveau role
export const addRole = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Donnees invalides", errors: errors.array() });
  }
  try {
    const newRole = await Role.create(req.body);
    return res.status(201).json({
      message: "Role cree avec succes.",
      data: newRole,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la creation du role - ${error.message}`,
    });
  }
};

// 5. Supprimer un role
export const delRole = async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    const roleFound = await Role.findByPk(id);
    if (!roleFound) {
      return res.status(404).json({
        message: "Le role demande n'existe pas.",
      });
    }

    await roleFound.destroy();
    return res.status(200).json({
      message: "Role supprime avec succes.",
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la suppression du role - ${error.message}`,
    });
  }
};

// 6. Mettre a jour un role
export const updateRole = async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }

  try {
    const roleFound = await Role.findByPk(id);

    if (!roleFound) {
      return res.status(404).json({
        message: "Le role demande n'existe pas.",
      });
    }

    const updatedRole = await roleFound.update(req.body);
    return res.status(200).json({
      message: "Role mis a jour avec succes.",
      data: updatedRole,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la mise a jour du role - ${error.message}`,
    });
  }
};

// 7. Afficher un seul role
export const displayRole = async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID invalide" });
  }
  try {
    const roleFound = await Role.findByPk(id);

    if (!roleFound) {
      return res.status(404).json({
        message: "Le role demande n'existe pas.",
      });
    }
    return res.status(200).json({
      data: roleFound,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Erreur serveur lors de la recuperation du role - ${error.message}`,
    });
  }
};
