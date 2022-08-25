const router = require('express').Router();
const { Product } = require('../models');

router.post(async (req, res) => {
  const {
    name, category_id, title, price, photo, user_id,
  } = req.body;
  if (name && category_id && title && price && photo && user_id) {
    const newProduct = await Product.create({
      name, category_id, title, price, photo, user_id,
    });
    res.json(newProduct);
  }
});
