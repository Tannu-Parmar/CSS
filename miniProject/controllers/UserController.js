const User = require('../models/user');

// Controller for creating a new user
exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = new User({
            username,
            email,
            password
        });

        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

// Controller for getting a user by their ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get user' });
    }
};

// Controller for updating a user by their ID
exports.updateUserById = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.username = username;
        user.email = email;
        user.password = password;

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};

// Controller for deleting a user by their ID
exports.deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};
