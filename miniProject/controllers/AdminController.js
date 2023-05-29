const Admin = require('../models/admin');

// Controller for creating a new admin
exports.createAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const admin = new Admin({
      username,
      email,
      password
    });

    const savedAdmin = await admin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create admin' });
  }
};

// Controller for getting an admin by their ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get admin' });
  }
};

// Controller for updating an admin by their ID
exports.updateAdminById = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    admin.username = username;
    admin.email = email;
    admin.password = password;

    const updatedAdmin = await admin.save();
    res.json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update admin' });
  }
};

// Controller for deleting an admin by their ID
exports.deleteAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete admin' });
  }
};
