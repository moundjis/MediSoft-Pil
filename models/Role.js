// 1. Importer la configuration de notre database depuis connection
import database from "../config/connection.js";

// 2. Importer les types de donnees de Sequelize pour gerer le type des colonnes
import { DataTypes } from "sequelize";

// 3. Creer la table/modele "Role" qui sera synchronisee avec la base de donnees
const Role = database.define(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Administrateur",
      validate: {
        isIn: {
          args: [["Medecin", "Administrateur", "sudo"]],
          msg: "Le titre de l'employe doit etre 'Medecin', 'Administrateur' ou 'sudo'.",
        },
      },
    },
    specialite: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: {
          args: [["Cardiologue", "Ophtalmologue", "Dermatologue", "Dentiste"]],
          msg: "La specialite du medecin doit etre 'Cardiologue', 'Ophtalmologue', 'Dermatologue' ou 'Dentiste'.",
        },
      },
    },
  },
  {
    tableName: "roles",
    timestamps: true,
  }
);

// 4. Validation via middleware `beforeValidate`
Role.beforeValidate((role) => {
  if (role.titre === "Medecin" && !role.specialite) {
    throw new Error("Un medecin doit avoir une specialite.");
  }
  if (role.titre !== "Medecin" && role.specialite) {
    throw new Error("Seuls les medecins peuvent avoir une specialite.");
  }
});

// 5. Exporter la table/modele pour creer des relations entre les autres tables
export default Role;
