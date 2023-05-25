const express = require('express');
const { postStateCity } = require('../controllers/statecontroller');
const postStateCityRouter = express.Router();

postStateCityRouter.post('/stateCity', postStateCity)


module.exports = postStateCityRouter;