const {
  Model,
} = require('sequelize');
const category = require('./category');
const product = require('./product');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
    static associate(models) {
      this.belongsTo(
        models.Role,
        {
          foreignKey: 'role_id',
        },
      );
      this.belongsToMany(models.Category, { through: 'Products', foreignKey: 'user_id' });
      this.belongsToMany(models.Product, { through: 'FavoriteProducts', foreignKey: 'user_id' });
      this.hasMany(models.FavoriteSeller, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
