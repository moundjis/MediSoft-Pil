// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Prescription" qui sera synchronisee avec la base de donnees
const Prescription = database.define(
  "Prescription",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    medicament: { type: DataTypes.STRING, allowNull: false },
    dosage: { type: DataTypes.STRING, allowNull: false },
    quantite: { type: DataTypes.INTEGER, allowNull: false },
    note_medecin: { type: DataTypes.TEXT, allowNull: true },
    renouvellement: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    tableName: "prescriptions",
    timestamps: true,
  }
);

// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default Prescription;
