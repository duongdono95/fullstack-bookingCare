'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doctor_infor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      contentHTML: {
        allowNull: false,
        type: Sequelize.TEXT('long'),
      },
      contentMarkdown: {
        allowNull: false,
        type: Sequelize.TEXT('long'),
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT('long'),
      },
      priceId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provinceId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paymentId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clinicName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clinicAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doctor_infor');
  },
};
