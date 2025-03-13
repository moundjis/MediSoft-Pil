import database from "../config/connection.js";
import { DataTypes } from "sequelize";

const Prescription = database.define(
  "Prescription",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    medicament: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dosage: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    quantite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    note_medecin: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    renouvellement: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    id_ordonnance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "ordonnances",
        key: "id",
      },
    },

    id_consultation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "consultations",
        key: "id",
      },
    },
  },
  {
    tableName: "prescriptions",
    timestamps: true,
  }
);

export default Prescription;
