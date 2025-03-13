// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Employe" qui sera synchronisee avec la base de donnees
const Employe = database.define(
  "Employe",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    prenom: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    date_de_naissance: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },

    nas: {
      type: DataTypes.STRING(9),
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true,
      },
    },

    courriel: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100],
      },
    },

    telephone: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [10, 10],
      },
    },

    adresse: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles", // il faut verifier le nom de la table
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
    tableName: "employes",
    timestamps: true,
  }
);

// 4. Exporter la table/modele pour creer des relations entre les autres tables
export default Employe;
