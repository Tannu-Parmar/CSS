const express = require('express');
const { postUser } = require('../controllers/usercontroller');
const postUserRouter = express.Router();

postUserRouter.post('/user', postUser)


module.exports = postUserRouter;