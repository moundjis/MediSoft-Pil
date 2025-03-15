import { Router } from "express";

import AuthRoute from "./AuthRoute.js";
import ConsultationRoute from "./ConsultationRoute.js";
import DossierMedicalRoute from "./DossierMedicalRoute.js";
import EmployeRoute from "./EmployeRoute.js";
import OrdonnanceRoute from "./OrdonnanceRoute.js";
import PatientRoute from "./PatientRoute.js";
import PharmacieRoute from "./PharmacieRoute.js";
import PrescriptionRoute from "./PrescriptionRoute.js";
import RendezVousRoute from "./RendezVousRoute.js";
import RoleRoute from "./RoleRoute.js";

const router = Router();

router.use("/auth", AuthRoute);
router.use("/consultation", ConsultationRoute);
router.use("/dossier-medical", DossierMedicalRoute);
router.use("/employe", EmployeRoute);
router.use("/ordonnance", OrdonnanceRoute);
router.use("/patient", PatientRoute);
router.use("/pharmacie", PharmacieRoute);
router.use("/prescription", PrescriptionRoute);
router.use("/rendez-vous", RendezVousRoute);
router.use("/role", RoleRoute);

export default router;
