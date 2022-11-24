const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/product.routes');
const morgan = require('morgan');
// const cors = require('cors');
const PORT = 3001;
const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));




app.use(morgan('dev'))
app.use(express.json())
app.use(userRoutes)
app.use(productRoutes)
// app.use(cors({

// }));
app.listen(PORT, () => {
    console.log(`El servidor está trabajando en el Puerto ${PORT}`)

})