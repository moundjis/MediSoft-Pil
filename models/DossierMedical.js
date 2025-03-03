// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "DossierMedical" qui sera synchronisee avec la base de donnees
const DossierMedical = database.define(
  "DossierMedical",
  {
    ID_Dossier_Medical: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Prenom_Nom_Mere: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Prenom_Nom_Pere: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    No_assurance: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Antecedant_Fam: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    Maladies_Chronique: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    Allergies: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    Date_de_Creation: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Medecin_traitant: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Traitements: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
  },
  {
    tableName: "DossierMedical",
    timestamps: true,
  }
);

// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default DossierMedical;
