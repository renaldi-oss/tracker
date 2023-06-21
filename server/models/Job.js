const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Company = sequelize.define('company', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  company_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  job_role: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  date_applied: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  app_status: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['id'],
    },
  ],
});

module.exports = Company;
