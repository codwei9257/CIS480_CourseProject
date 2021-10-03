const express= require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//connect to Mongoose DB, show error if error occurs, otherwise show db connected message
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db= mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())
app.use(cors())
//Connect to user router for CRUD functionality
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(4000, () => console.log('Server has started'))