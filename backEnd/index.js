const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductsRouter= require('./Routes/ProductsRouter');

require('dotenv').config();
require('./Models/db');


const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  res.send('Hello World!')
})

app.use(bodyParser.json());
app.use(cors());

app.use('/auth',AuthRouter);
app.use('/products',ProductsRouter);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})