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
Consultation.belongsTo(Patient, { 
  foreignKey: "id_patient", 
  onDelete: 'CASCADE',  // Si un patient est supprimé, toutes les consultations associées seront supprimées
  onUpdate: 'CASCADE',  // Si l'id du patient est modifié, il sera mis à jour dans la table Consultation
});
Patient.hasMany(Consultation, { 
  foreignKey: "id_patient",
  onDelete: 'CASCADE',  // Suppression en cascade pour les consultations liées
  onUpdate: 'CASCADE',
});

// 4. Relation Patient - Dossier Médical
Patient.hasOne(DossierMedical, { 
  foreignKey: "id_patient", 
  onDelete: 'CASCADE',  // Si un patient est supprimé, son dossier médical est aussi supprimé
  onUpdate: 'CASCADE',
});
DossierMedical.belongsTo(Patient, { 
  foreignKey: "id_patient", 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE',
});

// 5. Relation Patient - Rendez-vous
Patient.hasMany(RendezVous, { 
  foreignKey: "id_patient", 
  onDelete: 'CASCADE',  // Si un patient est supprimé, tous les rendez-vous associés sont supprimés
  onUpdate: 'CASCADE',
});
RendezVous.belongsTo(Patient, { 
  foreignKey: "id_patient", 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE',
});

// 6. Relation Consultation - Prescription
Consultation.hasMany(Prescription, { 
  foreignKey: "id_consultation", 
  onDelete: 'CASCADE',  // Si une consultation est supprimée, les prescriptions associées sont supprimées
  onUpdate: 'CASCADE',
});
Prescription.belongsTo(Consultation, { 
  foreignKey: "id_consultation", 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE',
});

// 7. Relation Prescription - Ordonnance
Prescription.belongsTo(Ordonnance, { 
  foreignKey: "id_ordonnance", 
  onDelete: 'CASCADE',  // Si une prescription est supprimée, l'ordonnance associée sera aussi affectée
  onUpdate: 'CASCADE',
});
Ordonnance.hasMany(Prescription, { 
  foreignKey: "id_ordonnance", 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE',
});

// 8. Relation Ordonnance - Pharmacie
Ordonnance.belongsTo(Pharmacie, { 
  foreignKey: "id_pharmacie", 
  onDelete: 'CASCADE',  // Si une ordonnance est supprimée, elle sera supprimée de la pharmacie aussi
  onUpdate: 'CASCADE',
});
Pharmacie.hasMany(Ordonnance, { 
  foreignKey: "id_pharmacie", 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE',
});

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
