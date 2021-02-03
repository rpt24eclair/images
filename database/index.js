require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize( 'sbGallery', 'student', process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    idle: 200000,
    acquire: 1000000,
  }
});


sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch((error) => {
  console.error('Unable to connect to the database:', error);
});

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  modelId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING(50),
    allowNull: false
  }

}, { timestamp: false });

module.exports = {
  Image
 };
