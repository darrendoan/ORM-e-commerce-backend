const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
    try {
      // Pagination
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 10;
      const offset = (page - 1) * pageSize;
  
      const categories = await Category.findAll({ 
        include: [{ model: Product }],
        limit: pageSize,
        offset: offset,
      });
  
      // Check if there are more results
      const totalCategories = await Category.count();
      const totalPages = Math.ceil(totalCategories / pageSize);
      const hasNextPage = page < totalPages;
  
      // Response structure
      const response = {
        categories: categories,
        pagination: {
          totalCategories: totalCategories,
          totalPages: totalPages,
          currentPage: page,
          hasNextPage: hasNextPage,
        },
      };
  
      res.status(200).json(response);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});
  

// Get a single category and its associated products by ID
router.get('/:id', async (req, res) => {
    try {
      const categoryId = req.params.id;
  
      // Input validation
      if (!categoryId || isNaN(categoryId)) {
        return res.status(400).json({ message: 'Invalid category id' });
      }
  
      const category = await Category.findByPk(categoryId, { include: [{ model: Product }] });
  
      if (category) {
        // Response structure
        res.status(200).json({ category });
      } else {
        res.status(404).json({ message: `No category found for the given id ${categoryId}` });
      }
    } catch (error) {
      console.error('Error fetching category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});
  

// Create a new category
router.post('/', async (req, res) => {
    try {
      const { name, description } = req.body;
  
      // Input validation
      if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: 'Name is required and must be a non-empty string' });
      }
  
      // Optionally validate other fields like description
  
      const newCategory = await Category.create({ name, description });
  
      // Log the creation
      console.log(`New category created: ${newCategory.name} (${newCategory.id})`);
  
      // Respond with the created category
      res.status(201).json({ message: 'Category created successfully', category: newCategory });
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});
  

// Update a category by ID
router.put('/:id', async (req, res) => {
    try {
      const categoryId = req.params.id;
      const { name, description } = req.body;
  

      if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: 'Name is required and must be a non-empty string' });
      }
  
      const [updatedCount] = await Category.update({ name, description }, { where: { id: categoryId } });
  
      if (updatedCount === 0) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      const updatedCategory = await Category.findOne({ where: { id: categoryId } });
  
      console.log(`Category updated: ${updatedCategory.name} (${updatedCategory.id})`);
  
      res.status(200).json({ message: 'Category updated successfully', category: updatedCategory });
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});
  

// Delete a category by ID
router.delete('/:id', async (req, res) => {
    try {
      const categoryId = parseInt(req.params.id); // Parse the id parameter as an integer
      if (isNaN(categoryId)) {
        return res.status(400).json({ message: 'Invalid id parameter' });
      }
  
      const deletedCategory = await Category.destroy({ where: { id: categoryId } });
      if (!deletedCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      res.status(200).json({ message: 'Category deleted successfully', deletedCategory });
      // Optionally log the deletion
      console.log(`Category with id ${categoryId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});
  

module.exports = router;