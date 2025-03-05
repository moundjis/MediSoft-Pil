// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Patient" qui sera synchronisee avec la base de donnees
const Patient = database.define(
  "Patient",
  {
    ID_Patient: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Prenom: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Date_de_naissance: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    NAS: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Courriel: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Telephone: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    Adresse: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ID_Employe: {
      type: DataTypes.INTEGER,
      allowNull: true, // si un patient n'a pas encore de medecin traitant
      references: {
        model: "Employe",
        key: "ID_Employee",
      },
    },
    ID_Dossier_Medical: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "DossierMedical",
        key: "ID_Dossier_Medical",
      },
    },
  },
  {
    tableName: "Patient",
    timestamps: true,
  }
);

// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default Patient;
