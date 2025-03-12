import database from "../config/connection.js";
import { DataTypes } from "sequelize";

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
    id_employe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "employes",
        key: "id",
      },
    },
  },
  {
    tableName: "roles",
    timestamps: true,
  }
);

// Validation via middleware `beforeValidate`
Role.beforeValidate((role) => {
  if (role.titre === "Medecin" && !role.specialite) {
    throw new Error("Un medecin doit avoir une specialite.");
  }
  if (role.titre !== "Medecin" && role.specialite) {
    throw new Error("Seuls les medecins peuvent avoir une specialite.");
  }
});

export default Role;
