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
  const userId = req.session.user?.id;
  console.log(req.session, 'uuuuuuuuuuuuu');
  const currBest = {
    product_id: id, photo, name, title, price, user_id: userId,
  };
  try {
    await Favorite.create(currBest);
    res.json(currBest);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  await Favorite.destroy({
    where: { id: req.params.id },
  });
  res.sendStatus(200);
  // res.json({success: true})
});
module.exports = router;
