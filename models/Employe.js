// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Employe" qui sera synchronisee avec la base de donnees
const Employe = database.define(
  "Employe",
  {
    ID_Employee: {
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
    Addresse: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ID_Role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Role",
        key: "ID_Role",
      },
    },
  },
  {
    tableName: "Employe",
    timestamps: true,
  }
);

// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default Employe;
