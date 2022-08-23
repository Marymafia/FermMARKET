const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FavoriteProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FavoriteProduct.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'FavoriteProduct',
  });
  return FavoriteProduct;
};
