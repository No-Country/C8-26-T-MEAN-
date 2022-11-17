import { pool } from '../database/config/config.js'



export const getProducts = async (req, res) => {

    try {
        const [result] = await pool.query("SELECT * FROM products") 
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}