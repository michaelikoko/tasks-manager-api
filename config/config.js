require('dotenv').config();
const {DATABASE_URL} = require('../utils/config');
module.exports = {
  development: {
    url: DATABASE_URL,
    dialect: 'postgres',
    seederStorage: "sequelize",
    seederStorageTableName: "SequelizeData"
  }
};
