// 1. Importer l'entite/model avec ses relations
import { Role, Employe } from "../models/relations.js";

// 2. Importer le middleware de validation
import { body, validationResult } from "express-validator";

// 3. Lister tous les roles
export const getAllRoles = async (req, res) => {
  try {
    const rolesListe = await Role.findAll({
      include: [
        {
          model: Employe,
          attributes: ["nom", "prenom"], // Attributs spécifiques du modèle associé
        },
      ],
    });

    // Vérifier si la liste est vide
    if (!rolesListe || rolesListe.length === 0) {
      return res.status(404).json({
        message: "Aucun role trouvé.",
      });
    }

    // Formatter les roles pour le retour dans le front end /////
    const formattedRoles = rolesListe.map((role) => ({
      id: role.id,
      titre: role.titre,
      employes: role.Employes.map((emp) => ({
        nom: emp.nom,
        prenom: emp.prenom,
      })),
    }));

    return res.status(200).json({ data: formattedRoles });
  } catch (error) {
    // Retourner un message d'erreur en cas de problème
    return res.status(500).json({
      message: `Erreur serveur lors de la récupération des roles - ${error.message}`,
    });
  }
};

// 4. Ajouter un nouveau rôle
export const addRole = async (req, res) => {
  // Vérification des erreurs de validation des données envoyées dans la requête
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Si des erreurs sont présentes, on retourne une réponse 400 (Bad Request)
    return res
      .status(400)
      .json({ message: "Données invalides", errors: errors.array() });
  }

  try {
    // Vérification si un rôle avec le même titre existe déjà dans la base de données
    const existingRole = await Role.findOne({
      where: { titre: req.body.titre },
    });

    // Si un rôle avec le même titre existe déjà, on retourne une erreur
    if (existingRole) {
      return res.status(400).json({
        message: "Ce rôle existe déjà.",
      });
    }

    // Création d'un nouveau rôle dans la base de données avec les données envoyées dans le corps de la requête
    const newRole = await Role.create(req.body);

    // Si la création du rôle est réussie, on retourne une réponse 201 (Created)
    return res.status(201).json({
      message: "Rôle créé avec succès.",
      data: newRole, // Les données du rôle nouvellement créé
    });
  } catch (error) {
    // Si une erreur se produit lors de la création du rôle, on retourne une réponse 500 (Internal Server Error)
    return res.status(500).json({
      message: `Erreur serveur lors de la création du rôle - ${error.message}`,
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
