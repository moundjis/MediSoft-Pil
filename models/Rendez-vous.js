// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Rendez-vous" qui sera synchronisee avec la base de donnees
const RendezVous = database.define(
  "RendezVous",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    date_rdv: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    heure_rdv: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    note_medecin: { type: DataTypes.TEXT, allowNull: true },
    type_rdv: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "consultation",
      validate: {
        isIn: {
          args: [["consultation", "suivi", "urgence"]],
          msg: "Le type de rendez-vous doit etre soit 'consultation', 'suivi', ou 'urgence'",
        },
      },
    },
    status_rdv: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "en attente",
      validate: {
        isIn: {
          args: [["en attente", "confirme", "annule", "termine"]],
          msg: "Le statut du rendez-vous doit etre 'en attente', 'confirme', 'annule', ou 'termine'",
        },
      },
    },
  },
  {
    tableName: "rendez_vous",
    timestamps: true,
  }
);
// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default RendezVous;
