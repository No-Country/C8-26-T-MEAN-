const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/product.routes');


const morgan = require('morgan')
const cors = require('cors')


const PORT = 3000;
const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(userRoutes)
app.use(productRoutes)
app.use(cors({
    origin: 'http://localhost:5173/'
}))
app.listen(PORT, () => {
    console.log(`El servidor está trabajando en el Puerto ${PORT}`)

})