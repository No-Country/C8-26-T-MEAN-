import { pool } from '../database/config/config.js'
const promisePool = pool.promise();

export const getUsers = async (req, res) =>{

    try {
        const [result] = await promisePool.query("SELECT * FROM users ORDER BY created_at ASC");
        res.json(result)        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}

