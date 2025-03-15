// 1. Importer le module Sequelize
import { Sequelize } from "sequelize";

// 2. Importer le fichier (.env) qui contient la configuration de la base de donnees
import dotenv from "dotenv";

// 3. Extraire la configuration de la base de donnees
dotenv.config();

// 4. On cree une connexion vers la base de donnees avec Sequelize()
const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD || "", // Mot de passe (vide si non défini)
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  }
);

// 5. Tester la connexion
const testConnection = async () => {
  try {
    await connection.authenticate();
    console.log("Connexion à la base de données réussie.");
  } catch (error) {
    console.error("Erreur de connexion à la base de données:", error);
  }
};

testConnection();

// 6. On exporte la connexion
export default connection;
