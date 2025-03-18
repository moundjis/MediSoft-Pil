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
    },
  },
  {
    tableName: "roles",
    timestamps: true,
  }
);

export default Role;
