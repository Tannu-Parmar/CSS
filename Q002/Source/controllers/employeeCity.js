const userModel = require("../models/user.js")

const findEmployeeFromCity = async (req, res) => {
    try {
        const employees = await userModel.aggregate([{
            $group: {
                _id: '$City',
                count: { $count: {} }
            },
        }])
        res.send(employees)
    } catch (error) {
        res.send(error)
    }
}

module.exports = findEmployeeFromCity