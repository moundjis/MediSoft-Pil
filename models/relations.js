// 1. Importer les tables/modeles sans relations
import Prescription from "./Prescription.js";
import RendezVous from "./RendezVous.js";
import Role from "./Role.js";
import Consultation from "./Consultation.js";
import DossierMedical from "./DossierMedical.js";
import Employe from "./Employe.js";

// 2. Creer les relations entre les tables/modeles

// 3. Exporter les tables/modeles avec relations vers les controllers
export {
  Prescription,
  RendezVous,
  Role,
  Consultation,
  DossierMedical,
  Employe,
};
