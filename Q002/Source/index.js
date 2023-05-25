const express = require('express')
const mongoose = require('mongoose')
const statecontroller = require('./controllers/statecontroller')
const usercontroller = require('./controllers/usercontroller');
const postStateCityRouter = require('./routes/postStateCity');
const postUserRouter = require('./routes/postUser');
const employeeFromCity = require('./routes/employeeFromCity');
const app = express();

mongoose.connect("mongodb://localhost:27017/que2")
    .then(() => console.log("Database connected.."))
    .catch(() => console.log("error"));


app.use(express.json())

app.use(postStateCityRouter)

app.use(postUserRouter)

app.use(employeeFromCity)

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});