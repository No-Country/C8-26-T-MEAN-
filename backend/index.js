const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/product.routes');




const morgan = require('morgan');
const cors = require('cors');


const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
    res.render('Hola')
})
app.use(morgan('dev'))
app.use(express.json())
app.use(userRoutes)
app.use(productRoutes)
app.use(cors({
}))
app.listen(PORT, () => {
    console.log(`El servidor está trabajando en el Puerto ${PORT}`)

})

