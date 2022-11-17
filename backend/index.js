const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');


const morgan = require('morgan');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(express.json())
app.use(userRoutes)
app.use(productRoutes)
app.use(cors({
    origin: 'http://127.0.0.1:5173/'
}))
app.listen(PORT,() => {console.log(`El servidor está trabajando en el Puerto ${PORT}`)} )

