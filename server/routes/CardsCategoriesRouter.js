const router = require('express').Router();
const { Product } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(Product);
  console.log('---------------', id);
  const nameProduct = await Product.findAll({ where: { category_id: id } });
  if (nameProduct) {
    return res.json(nameProduct);
  }
  return res.json([]);
});

module.exports = router;
