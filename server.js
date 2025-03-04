import dotenv from "dotenv";
import express from "express";
import consultationRoute from "./routes/ConsultationRoute.js";
import dossierMedicalRoute from "./routes/DossierMedicalRoute.js";
import employeRoute from "./routes/EmployeRoute.js";
import prescriptionRoute from "./routes/PrescriptionRoute.js";
import rendezvousRoute from "./routes/RendezVousRoute.js";
import roleRoute from "./routes/RoleRoute.js";
// Middleware
const app = express();


// Connexion à MySQL
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur Medisoft !");
});

// Routes
app.use("/api/consultation", consultationRoute);
app.use("/api/dossiermedical", dossierMedicalRoute);
app.use("/api/employe", employeRoute);

app.use("/api/prescription", prescriptionRoute);
app.use("/api/rendezvous", rendezvousRoute);
app.use("/api/role", roleRoute);


const PORT = dotenv.config().parsed.PORT;

// Démarrage du serveur
app.listen(PORT, () => {
  console.info(`Serveur lance sur l'URL : http://localhost:${PORT}`);
});
