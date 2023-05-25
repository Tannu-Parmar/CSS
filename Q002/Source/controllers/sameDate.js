const userModel = require("../models/user.js")

const sameDate = async (req, res) => {
    try {
        const employees = await userModel.aggregate([{
            $group: {
                _id: '$DOJ',
                employees: { $push: "$Name" }
            },
        }])
        res.send(employees)
    } catch (error) {
        res.send(error)
    }
}

module.exports = sameDate