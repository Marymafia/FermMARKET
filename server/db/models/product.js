const {
  Model,
} = require('sequelize');
const user = require('./user');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, { through: 'FavoriteProducts', foreignKey: 'product_id' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    title: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    photo: DataTypes.TEXT,
    price: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
