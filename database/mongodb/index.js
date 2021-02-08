require('dotenv').config()

mongoose = require('mongoose');
const { Schema } = mongoose;

const imagesSchema = new Schema({
  id:  Number, // String is shorthand for {type: String}
  modelId: Number,
  imageUrl:   String,

});

const Images = mongoose.model('Images', imagesSchema);

exports.Images = Images;