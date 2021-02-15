

require('dotenv').config()
mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/sbGallery'
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({modelId: Number, imageId: Number, imageUrl: String});
const Image = mongoose.model('Image', schema, 'Images');
// const dbSchema = new mongoose.Schema({});
// const dbImage = mongoose.model('Image', dbSchema, 'Images')  
 
  

// export {Image, dbImage}
  exports.Image = Image;
  // exports.dbImage = dbImage;


