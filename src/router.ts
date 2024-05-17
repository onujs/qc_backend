import { Router } from "express";
import { mostrarRoles, crearRole } from "./controllers/Role.controller";

const router = Router();

router.get('/roles', mostrarRoles)
router.post('/roles', crearRole )

export default router;