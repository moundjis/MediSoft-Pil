import { Router } from "express";
import EmployeRoute from "./EmployeRoute.js";
import RoleRoute from "./RoleRoute.js";
import AuthRoute from "./AuthRoute.js";

const router = Router();


router.use("/auth", AuthRoute);
router.use("/employe", EmployeRoute);
router.use("/role", RoleRoute);


export default router;
