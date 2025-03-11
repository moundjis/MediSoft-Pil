// 1. Importer la configuration de la base de données
import database from "../config/connection.js";

// 2. Importer les types de données de Sequelize
import { DataTypes } from "sequelize";

// 3. Créer la table/modèle "Pharmacie"
const Pharmacie = database.define(
  "Pharmacie",
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
    adresse: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        len: [10, 10], // Doit contenir exactement 10 caractères
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Doit être une adresse email valide
      },
    },
    id_employe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Employe", // Référence à la table Employe
        key: "id",
      },
    },
  },
  {
    tableName: "pharmacies", // Nom de la table dans la base de données
    timestamps: true, // Ajoute les champs createdAt et updatedAt
  }
);

// 4. Exporter le modèle
export default Pharmacie;
