const { Sequelize, DataTypes } = require('sequelize');
console.log('hello');
const sequelize = new Sequelize( 'sbGallery', 'student', '', {
  host: 'localhost',
  dialect: 'mysql'
});


var testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection();

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
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamp: false });

module.exports = {
  Image
 };