const { Image } = require('../database/index.js');

var getShoeImages = (shoeId) => {
  return Image.findAll({
    where: {
      modelId: shoeId
    }
  });
};

var postShoeImages = ( shoeId, imageUrl) =>{
  console.log('in model')
  return Image.create({

    modelId: shoeId,
    imageUrl: imageUrl
  })
}
var modifyShoeImages = (shoeId, imageId, imageUrl) => {
  return Image.findOne({
    where: {
      modelId: shoeId,
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

module.exports = {
  getShoeImages,
  postShoeImages,
  modifyShoeImages,
  deleteShoeImage
};