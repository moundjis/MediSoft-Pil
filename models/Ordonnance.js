// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Consultation" qui sera synchronisee avec la base de donnees
const Ordonnance = database.define(
  "Ordonnance",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    id_prescription: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "prescriptions",
        key: "id",
      },
    },

    id_pharmacie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pharmacies",
        key: "id",
      },
    },
  },
  { timestamps: true }
);

// 3. On exporte le model "Ordonnance" pour lui creer un controller
export default Ordonnance;
