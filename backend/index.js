import express from "express";
import morgan from 'morgan'
import cors from 'cors'

const PORT = 3000;
const app = express();

app.use(express.json())

app.listen(PORT,() => {console.log(`El servidor está trabajando en el Puerto ${PORT}`)} )

