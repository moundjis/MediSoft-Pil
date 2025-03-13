// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "DossierMedical" qui sera synchronisee avec la base de donnees
const DossierMedical = database.define(
  "DossierMedical",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prenom_nom_mere: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    prenom_nom_pere: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    no_assurance: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    antecedant_fam: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    maladies_chronique: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    allergies: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    date_de_creation: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    traitements: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    id_patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "patients",
        key: "id",
      },
    },
    id_employe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "employes",
        key: "id",
      },
    },
  },
  {
    tableName: "dossiers_medicaux",
    timestamps: true,
  }
);

// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default DossierMedical;
