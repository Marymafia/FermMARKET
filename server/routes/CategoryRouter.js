const router = require('express').Router();
const { Category, User, Product } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    res.json({});
  });

router.get('/category', async (req, res) => {
  const allCategories = await Category.findAll({
    include: [{
      model: Product,
      include: User,
    }],
  });
  res.json(allCategories);
});

router.get('/:id', async (req, res) => {
  const allCategories = await Category.findOne({
    where: { id: req.params.id },
    include: [{
      model: Product,
      include: User,
    }],
  });
  res.json(allCategories);
});

module.exports = router;
