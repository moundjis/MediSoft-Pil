// 1. On importe les modules installes
import express from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

// 2. On importe la configuration de connexion à la base de données
import connection from "./config/connection.js";

// 3. On importe les routes
import routes from "./routes/index.js";

// 4. On cree un server
const app = express();

// 5. On ajoute les middlewares
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 6. Route racine pour un message de bienvenue
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API MediSoft-Pil" });
});

// 7. On utilise les routes
app.use("/api", routes);

// 8. Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Une erreur s'est produite";
  res.status(statusCode).json({ message });
});

// 9. Initialisation des tables dans la base de donnees
connection.sync({ alter: true }).then(() => {
  console.log("Tables synchronisées");
});

// 10. On demarre le server avec le numero de port importe depuis le fichier de config (.env)
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.info("Serveur démarré:");
  console.info(`Environnement: ${process.env.NODE_ENV || "development"}`);
  console.info(`API: http://localhost:${PORT}`);
  console.info(`Base de données: ${process.env.DB_NAME}`);
});
