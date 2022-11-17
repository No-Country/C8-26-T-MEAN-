import express from "express";
import userRoutes from './routes/user.routes.js'
import indexRoutes from './routes/index.routes.js'
import productRoutes from './routes/product.routes.js'
import morgan from 'morgan'
import cors from 'cors'

const PORT = 3000;
const app = express();

app.use(express.json())
app.use(indexRoutes)
app.use(userRoutes)
app.use(productRoutes)
app.use(cors({
    origin: 'http://127.0.0.1:5173/'
}))
app.listen(PORT)
console.log(`El servidor está trabajando en el Puerto ${PORT}`)

