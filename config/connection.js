// 1. Importer le module de traduction - Sequelize
import { Sequelize } from "sequelize";

// 2. Importer le fichier (.env) qui contient la configuration de la base de donnees
import dotenv from "dotenv";

// 3. Extraire la configuration de la base de donnees
dotenv.config();

// 4. On cree une connexion vers la base de donnees avec Sequelize()
const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  }
);

// 5. On exporte la connexion
export default connection;
