import { Router } from 'express';
import { apiUserController } from '../controllers/api/apiUserController'
const router = Router();

router.get("/api/users", apiUserController.list)

router.get("/users/last", apiUserController.last)