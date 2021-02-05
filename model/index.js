const { Image } = require('../database/index.js');

var getShoeImages = (shoeId) => {
  return Image.findAll({
    where: {
      modelid: shoeId
    }
  });
};

var postShoeImages = ( shoeId, imageUrl) =>{
  return Image.create({

    modelid: shoeId,
    imageurl: imageUrl
  })
}
var modifyShoeImages = (shoeId, imageId, imageUrl) => {
  return Image.findOne({
    where: {
      modelid: shoeId,
      id: imageId
    }

  }).then(shoe=>{
    shoe.update({
      imageUrl: imageUrl
    })
  })
}
var deleteShoeImage = (shoeId, imageId) => {
  return Image.destroy({
    where:{
      modelId: shoeId,
      id: imageId
    }
  })
}
var findMaxImage = () => {
  return Image.max('imageurl')
}

module.exports = {
  getShoeImages,
  postShoeImages,
  modifyShoeImages,
  deleteShoeImage,
  findMaxImage
};