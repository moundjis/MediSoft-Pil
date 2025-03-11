import { Router } from "express";
import EmployeRoute from "./EmployeRoute.js";
import RoleRoute from "./RoleRoute.js";
import AuthRoute from "./AuthRoute.js";

const router = Router();

router.use("/employe", EmployeRoute);
router.use("/role", RoleRoute);
router.use("/auth", AuthRoute);

export default router;
