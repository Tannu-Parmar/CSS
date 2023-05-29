const Business = require('../models/business');

// Controller for creating a new business
exports.createBusiness = async (req, res) => {
  try {
    const { name, address, city, state, postalCode, phone, categories, isOpen, openingTime, closingTime } = req.body;

    const business = new Business({
      name,
      address,
      city,
      state,
      postalCode,
      phone,
      categories,
      isOpen,
      openingTime,
      closingTime
    });

    const savedBusiness = await business.save();
    res.status(201).json(savedBusiness);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create business' });
  }
};

// Controller for getting a business by its ID
exports.getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id).populate('categories');
    if (!business) {
      return res.status(404).json({ error: 'Business not found' });
    }
    res.json(business);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get business' });
  }
};

// Controller for updating a business by its ID
exports.updateBusinessById = async (req, res) => {
  try {
    const { name, address, city, state, postalCode, phone, categories, isOpen, openingTime, closingTime } = req.body;

    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ error: 'Business not found' });
    }

    business.name = name;
    business.address = address;
    business.city = city;
    business.state = state;
    business.postalCode = postalCode;
    business.phone = phone;
    business.categories = categories;
    business.isOpen = isOpen;
    business.openingTime = openingTime;
    business.closingTime = closingTime;

    const updatedBusiness = await business.save();
    res.json(updatedBusiness);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update business' });
  }
};

// Controller for deleting a business by its ID
exports.deleteBusinessById = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    if (!business) {
      return res.status(404).json({ error: 'Business not found' });
    }
    res.json({ message: 'Business deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete business' });
  }
};
