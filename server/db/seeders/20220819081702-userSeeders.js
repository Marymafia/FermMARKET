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
    await queryInterface.bulkInsert('Users', [{
      name: 'Bob',
      email: 'bob123@mail.ru',
      password: '123',
      role_id: 1,
      // address: 'улица Орджоникидзе 11с10',
      // phone: '88005553535',
    },
    {
      name: 'Beb',
      email: 'beb123@mail.ru',
      password: '123',
      role_id: 2,
      address: 'улица Орджоникидзе 11с10',
      phone: '88005555555',
    },
    {
      name: 'Bib',
      email: 'bib123@mail.ru',
      password: '123',
      role_id: 3,
      address: 'улица Орджоникидзе 11с10',
      phone: '89265553535',
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
