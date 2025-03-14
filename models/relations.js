// 1. Importer les modèles
import Patient from "./Patient.js";
import Consultation from "./Consultation.js";
import Prescription from "./Prescription.js";
import Ordonnance from "./Ordonnance.js";
import Pharmacie from "./Pharmacie.js";
import Employe from "./Employe.js";
import Role from "./Role.js";
import RendezVous from "./RendezVous.js";
import DossierMedical from "./DossierMedical.js";

// 1. Relation Employé - Role
Role.hasMany(Employe, { foreignKey: "id_role" }); // Un rôle peut être attribué à plusieurs employés
Employe.belongsTo(Role, { foreignKey: "id_role" }); // Un employé peut avoir un seul rôle

// 2. Relation Employé - Consultation
Employe.hasMany(Consultation, { foreignKey: "id_employe" }); // Un employé peut effectuer plusieurs consultations
Consultation.belongsTo(Employe, { foreignKey: "id_employe" }); // Une consultation est effectuée par un seul employé

// 3. Relation Consultation - Patient
Consultation.belongsTo(Patient, { foreignKey: "id_patient" }); // Une consultation appartient à un patient
Patient.hasMany(Consultation, { foreignKey: "id_patient" }); // Un patient peut avoir plusieurs consultations

// 4. Relation Patient - Dossier Médical
Patient.hasOne(DossierMedical, { foreignKey: "id_patient" }); // Un patient peut avoir un seul dossier médical
DossierMedical.belongsTo(Patient, { foreignKey: "id_patient" }); // Un dossier médical appartient à un patient

// 5. Relation Patient - Rendez-vous
Patient.hasMany(RendezVous, { foreignKey: "id_patient" }); // Un patient peut avoir plusieurs rendez-vous
RendezVous.belongsTo(Patient, { foreignKey: "id_patient" }); // Un rendez-vous appartient à un seul patient

// 6. Relation Consultation - Prescription
Consultation.hasMany(Prescription, { foreignKey: "id_consultation" }); // Une consultation peut avoir plusieurs prescriptions
Prescription.belongsTo(Consultation, { foreignKey: "id_consultation" }); // Une prescription appartient à une consultation

// 7. Relation Prescription - Ordonnance
Prescription.belongsTo(Ordonnance, { foreignKey: "id_ordonnance" }); // Une prescription existe dans une ordonnance
Ordonnance.hasMany(Prescription, { foreignKey: "id_ordonnance" }); // Une ordonnance peut contenir plusieurs prescriptions

// 8. Relation Ordonnance - Pharmacie
Ordonnance.belongsTo(Pharmacie, { foreignKey: "id_pharmacie" }); // Une ordonnance peut être envoyée à une seule pharmacie
Pharmacie.hasMany(Ordonnance, { foreignKey: "id_pharmacie" }); // Une pharmacie peut recevoir plusieurs ordonnances

// Export des modèles pour leur utilisation dans d'autres fichiers
export {
  Patient,
  Consultation,
  Prescription,
  Ordonnance,
  Pharmacie,
  Employe,
  Role,
  RendezVous,
  DossierMedical,
};
