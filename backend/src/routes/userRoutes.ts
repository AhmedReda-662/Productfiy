import { Router } from "express";
import { syncUsers } from "../controllers/userControllers";
import { requireAuth } from "@clerk/express";

const router = Router();

// /api/users/sync - POST => sync the clerk user to DB (PROTECTED)
router.post("/sync", requireAuth(), syncUsers);

export default router;
