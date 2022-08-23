const router = require('express').Router();
const { Category } = require('../db/models');

router.get('/category', async (req, res) => {
  const category = await Category.findAll();
  res.json(category);
});

module.exports = router;
