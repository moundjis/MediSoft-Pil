// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Consultation" qui sera synchronisee avec la base de donnees
const Consultation = database.define(
  "Consultation",
  {
    ID_Consultation: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Diagnostic: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    Note: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    Recommendations: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    ID_Patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Patient",
        key: "ID_Patient",
      },
    },
    ID_Employee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Employee",
        key: "ID_Employee",
      },
    },
  },
  {
    tableName: "Consultation",
    timestamps: true,
  }
);

// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default Consultation;
