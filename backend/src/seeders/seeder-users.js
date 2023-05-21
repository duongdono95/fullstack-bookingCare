'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '123456', // plain text
        firstName: 'Duong',
        lastName: 'Dono',
        address: 'New Zealand',
        gender: '1',
        roleId: 'R1',
        phoneNumber: '0225075555',
        image: 'dsadsadsad',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
