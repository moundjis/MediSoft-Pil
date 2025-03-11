// 1. Importer les tables/modeles sans relations
import Role from "./Role.js";
import Employe from "./Employe.js";
import DossierMedical from "./DossierMedical.js";
import Consultation from "./Consultation.js";

// 2. Creer les relations entre les tables/modeles

// Un rôle peut être attribué à plusieurs employés
Role.hasMany(Employe, { foreignKey: "id_role" });

// Un employé peut avoir un seul rôle
Employe.belongsTo(Role, { foreignKey: "id_role" });

// Relation DossierMedical - Consultation

// Un dossier medical peut contenir plusieurs consultations
DossierMedical.hasMany(Consultation, { foreignKey: "id_dossier_medical", as: "consultations" });

// Une consultation est associee a un seul dossier medical
Consultation.belongsTo(DossierMedical, { foreignKey: "id_dossier_medical", as: "dossierMedical" });

// 3. Exporter les tables/modeles avec relations vers les controllers
export { Role, Employe, DossierMedical, Consultation };
