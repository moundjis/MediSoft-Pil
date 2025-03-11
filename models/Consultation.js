// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Consultation" qui sera synchronisee avec la base de donnees
const Consultation = database.define(
  "Consultation",
  {
    id: {
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

    id_patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Patient",
        key: "id",
      },
    },
    id_employee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Employee",
        key: "id",
      },
    },
  },
  {
    tableName: "consultations",
    timestamps: true,
  }
);

// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default Consultation;
