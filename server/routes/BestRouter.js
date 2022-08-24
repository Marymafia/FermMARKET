const router = require('express').Router();
const { FavoriteProduct } = require('../db/models');

const Favorite = FavoriteProduct;
router.get('/', async (req, res) => {
  const allFavorites = await FavoriteProduct.findAll({ FavoriteProduct });

  res.json(allFavorites);
});

router.post('/', async (req, res) => {
  const {
    id, name, title, photo, price,
  } = req.body;
  console.log('>>>>>>>>>>>>>', req.body);
  const currBest = {
    id, photo, name, title, price,
  };
  Favorite.create(currBest);
  res.json(currBest);
});

router.delete('/:id', (req, res) => {
  Favorite.filter((el) => el.id !== req.params.id);
  res.sendStatus(200);
  // res.json({success: true})
});
module.exports = router;
