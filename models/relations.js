// 1. Importer les tables/modeles sans relations
import Role from "./Role.js";
import Employe from "./Employe.js";
import Patient from "./Patient.js";
import DossierMedical from "./DossierMedical.js";
import Pharmacie from "./Pharmacie.js";
import Prescription from "./Prescription.js";
import RendezVous from "./RendezVous.js";
import Consultation from "./Consultation.js"; // Importer le modèle Consultation

// 2. Créer les relations entre les tables/modeles

// Relation Role - Employe //////////////////////////////////////////////////
Role.hasMany(Employe, { foreignKey: "id_role", as: "employes" });
Employe.belongsTo(Role, { foreignKey: "id_role", as: "role" });

// Relation Patient - Prescription ///////////////////////////////////////////
Patient.hasMany(Prescription, { foreignKey: "id_patient", as: "prescriptions" });
Prescription.belongsTo(Patient, { foreignKey: "id_patient", as: "patient" });

// Relation Employe - Prescription ///////////////////////////////////////////
Employe.hasMany(Prescription, { foreignKey: "id_employe", as: "prescriptions" });
Prescription.belongsTo(Employe, { foreignKey: "id_employe", as: "employe" });

// Relation DossierMedical - Prescription ///////////////////////////////////
DossierMedical.hasMany(Prescription, { foreignKey: "id_dossier_medical", as: "prescriptions" });
Prescription.belongsTo(DossierMedical, { foreignKey: "id_dossier_medical", as: "dossier_medical" });

// Relation entre RendezVous et Patient //////////////////////////////////////
Patient.hasMany(RendezVous, { foreignKey: "id_patient", as: "rendezvous" });
RendezVous.belongsTo(Patient, { foreignKey: "id_patient", as: "patient" });

// Relation entre RendezVous et Employe //////////////////////////////////////
Employe.hasMany(RendezVous, { foreignKey: "id_employe", as: "rendezvous" });
RendezVous.belongsTo(Employe, { foreignKey: "id_employe", as: "employe" });

// Relation Pharmacie - Prescription /////////////////////////////////////////
Pharmacie.hasMany(Prescription, { foreignKey: "id_pharmacie", as: "prescriptions" });
Prescription.belongsTo(Pharmacie, { foreignKey: "id_pharmacie", as: "pharmacie" });

// Relation Consultation - Patient ///////////////////////////////////////////
Patient.hasMany(Consultation, { foreignKey: "id_patient", as: "consultations" });
Consultation.belongsTo(Patient, { foreignKey: "id_patient", as: "patient" });

// Relation Consultation - Employe //////////////////////////////////////////
Employe.hasMany(Consultation, { foreignKey: "id_employe", as: "consultations" });
Consultation.belongsTo(Employe, { foreignKey: "id_employe", as: "employe" });

// Relation Consultation - DossierMedical ///////////////////////////////////
DossierMedical.hasMany(Consultation, { foreignKey: "id_dossier_medical", as: "consultations" });
Consultation.belongsTo(DossierMedical, { foreignKey: "id_dossier_medical", as: "dossier_medical" });

// 3. Exporter les tables/modeles avec relations vers les controllers
export {
  Role,
  Employe,
  Patient,
  Prescription,
  DossierMedical,
  RendezVous,
  Pharmacie,
  Consultation,
};