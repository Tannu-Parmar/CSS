const CategoryMapping = require('../models/categoryMapping');

// Controller for creating a new category mapping
exports.createCategoryMapping = async (req, res) => {
  try {
    const { category, product } = req.body;

    const categoryMapping = new CategoryMapping({
      category,
      product
    });

    const savedCategoryMapping = await categoryMapping.save();
    res.status(201).json(savedCategoryMapping);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category mapping' });
  }
};

// Controller for getting all category mappings
exports.getAllCategoryMappings = async (req, res) => {
  try {
    const categoryMappings = await CategoryMapping.find();
    res.json(categoryMappings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get category mappings' });
  }
};

// Controller for getting a category mapping by its ID
exports.getCategoryMappingById = async (req, res) => {
  try {
    const categoryMapping = await CategoryMapping.findById(req.params.id);
    if (!categoryMapping) {
      return res.status(404).json({ error: 'Category mapping not found' });
    }
    res.json(categoryMapping);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get category mapping' });
  }
};

// Controller for updating a category mapping by its ID
exports.updateCategoryMappingById = async (req, res) => {
  try {
    const { category, product } = req.body;

    const categoryMapping = await CategoryMapping.findById(req.params.id);
    if (!categoryMapping) {
      return res.status(404).json({ error: 'Category mapping not found' });
    }

    categoryMapping.category = category;
    categoryMapping.product = product;

    const updatedCategoryMapping = await categoryMapping.save();
    res.json(updatedCategoryMapping);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category mapping' });
  }
};

// Controller for deleting a category mapping by its ID
exports.deleteCategoryMappingById = async (req, res) => {
  try {
    const categoryMapping = await CategoryMapping.findByIdAndDelete(req.params.id);
    if (!categoryMapping) {
      return res.status(404).json({ error: 'Category mapping not found' });
    }
    res.json({ message: 'Category mapping deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category mapping' });
  }
};
