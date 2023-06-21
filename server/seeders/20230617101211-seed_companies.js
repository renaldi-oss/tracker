'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('companies', [
      {
        company_name: 'ServiceIn',
        job_role: 'Frontend Developer',
        date_applied: new Date(),
        app_status: 'Applied',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: 'Gojek',
        job_role: 'Backend Developer',
        date_applied: new Date(),
        app_status: 'Interview',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: 'Lazada',
        job_role: 'Software Engineer',
        date_applied: new Date(),
        app_status: 'Interview',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: 'Lazada',
        job_role: 'Mobile Developer',
        date_applied: new Date(),
        app_status: 'Interview',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: 'Shopee',
        job_role: 'Mobile Developer',
        date_applied: new Date(),
        app_status: 'Interview',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: 'Shopee',
        job_role: 'Backend Developer',
        date_applied: new Date(),
        app_status: 'Interview',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('companies', null, {});
  },
};
