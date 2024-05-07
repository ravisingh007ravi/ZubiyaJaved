const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/routes.js');
const dotenv = require('dotenv');
const cors = require('cors');
require('dotenv').config()
mongoose.set('strictQuery', true);

const app = express();

app.use(cors());
app.use(express.json());

const DB = `mongodb+srv://ravi6680singh:R%40vi786R%40vi@cluster0.viocq1u.mongodb.net/Zubiya=true&w=majority`;
const port = process.env.PORT || 5000;


//MongoDB
mongoose.connect(process.env.MONGODB_URI || DB)
    .then(() => console.log("Mongoose is Connected😊😊"))
    .catch((err) => console.log(err));


app.use('/', route);

app.listen(port, () => console.log(`Server is Running Succesfully ${port}💕`));