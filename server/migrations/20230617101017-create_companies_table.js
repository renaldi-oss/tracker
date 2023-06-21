'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      company_name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      job_role: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      date_applied: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      app_status: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('companies');
  },
};
