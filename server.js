// 1. Importer les modules installes
import express from "express";

// 2. Creer le server
const app = express();

// 3. Creer une route TEST
app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur Medisoft !");
});

// 3. On demarre le server avec le numero de port
const PORT = 5000;
app.listen(PORT, () => {
  console.info(`Serveur lance sur l'URL : http://localhost:${PORT}`);
});
