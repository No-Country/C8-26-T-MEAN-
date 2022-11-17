import express from "express";
import userRoutes from './routes/userRoutes.js'
import indexRoutes from './routes/indexRoutes.js'

import morgan from 'morgan'
import cors from 'cors'

const PORT = 3000;
const app = express();

app.use(express.json())
app.use(indexRoutes)
app.use(userRoutes)
app.use(cors({
    origin: 'http://127.0.0.1:5173/'
}))
app.listen(PORT,() => {console.log(`El servidor está trabajando en el Puerto ${PORT}`)} )

