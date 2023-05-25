const userModel = require("../models/user.js")

const postUser = async (req, res) => {
    try {
        const user = await userModel.insertMany([req.body])
        res.send(user)
    } catch (error) {
        res.send(error)
    }
}

module.exports = { postUser }