// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Pharmacie" qui sera synchronisee avec la base de donnees
const Pharmacie = database.define(
  "Pharmacie",
  {
    ID_Pharmacie: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Adresse: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Telephone: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    Courriel: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "Pharmacie",
    timestamps: true,
  }
);

// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default Pharmacie;
