import { Router } from "express";
import { pool } from "../database/config/config.js";
const router = Router();
const promisePool = pool.promise();

router.get('/app', async (req, res) => {
    const [rows] = await promisePool.query('SELECT 1 + 1 as result');
    console.log(rows[0]);
    res.json(rows[0]);
})
export default router