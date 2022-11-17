import { pool } from '../database/config/config.js'


export const getUsers = async (req, res) => {
    
    try {
        const [result] = await pool.query("SELECT * FROM users");
        res.json(result)        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
