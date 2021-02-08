require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize( 'sbgallery', 'postgres', process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
}
});


sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch((error) => {
  console.error('Unable to connect to the database:', error);
});

const Image = sequelize.define('image', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  modelid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imageurl: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
//}, { timestamp: false });

module.exports = {
  Image
 };
