import { Router } from 'express';
import {
    getUsers,
    // getProducts
} from '../controllers/userController.js'
// import apiUserControllers  from '../controllers/api/apiUserController.js'
const router = Router();

router.get("/user", getUsers )

// router.get("/product", getProducts )


export default router;