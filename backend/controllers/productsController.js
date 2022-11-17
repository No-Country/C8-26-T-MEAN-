import { pool } from '../database/config/config.js'
const promisePool = pool.promise();


export const getProducts = async (req, res) => {

    try {
        const [result] = await promisePool.query("SELECT * FROM products") 
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}