module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Categories', [{
      name: 'Овощи',
      img: 'vegetable3.png',
    },
    {
      name: 'Фрукты',
      img: 'Apple.jpeg',
    },
    {
      name: 'Молочные изделия',
      img: 'Milckproducts.jpeg',
    },
    {
      name: 'Мясо и птица',
      img: 'Meats.jpeg',
    },
    {
      name: 'Рыба',
      img: 'fish2.jpeg',
    },
    {
      name: 'Мед',
      img: 'Hony.png',
    },
    {
      name: 'Выпечка',
      img: 'bread2.jpeg',
    },
    {
      name: 'Другое',
      img: 'Other.jpeg',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
