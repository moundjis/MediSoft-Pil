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
      type: DataTypes.STRING,
      allowNull: false,
    },

    dosage: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    quantite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    note_medecin: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    renouvellement: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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

    id_dossier_medical: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "dossiers_medicaux",
        key: "id",
      },
    },

    id_pharmacie: {
      type: DataTypes.INTEGER,
      allowNull: true, // Une prescription peut ne pas être envoyée à une pharmacie
      references: {
        model: "pharmacies",
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
