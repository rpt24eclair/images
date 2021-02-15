const { Image} = require('../database/mongodb/index.js');
// const { dbImage} = require('../database/mongodb/index.js');

var getShoeImages = (shoeId) => {
  return Image.find({
      modelId: shoeId
  })
};

var postShoeImages = ( shoeId, inputUrl) =>{
  var image =new Image()
  image.modelId = shoeId;
  image.imageId = 1;
  image.imageUrl = inputUrl;
 return image.save()
};

var modifyShoeImages = (shoeId, imageId, imageUrl) => {
  return Image.updateMany({modelId: shoeId, imageId: imageId}, { $set: { imageUrl: imageUrl } });
};

var deleteShoeImage = (shoeId, imageId) => {
  return Image.deleteOne({
    modelId: shoeId,
    imageId: imageId
  })
};

module.exports = {
  getShoeImages,
  postShoeImages,
  modifyShoeImages,
  deleteShoeImage
};
