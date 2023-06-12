'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('specialties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specialty: {
        type: Sequelize.STRING,
      },
      contentHTML: {
        allowNull: false,
        type: Sequelize.TEXT('long'),
      },
      contentMarkdown: {
        allowNull: false,
        type: Sequelize.TEXT('long'),
      },
      doctorId: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('specialties');
  },
};
