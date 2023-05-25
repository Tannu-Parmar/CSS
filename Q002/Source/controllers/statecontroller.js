const stateModel = require("../models/state.js")

const postStateCity = async (req, res) => {
    try {
        const state = await stateModel.insertMany([req.body])
        res.send(state)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { postStateCity }