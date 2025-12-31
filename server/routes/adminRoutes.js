import express from "express";
import { loginAdmin, registerAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/register", registerAdmin); // ONE TIME
router.post("/login", loginAdmin);

export default router;
 