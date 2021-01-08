const { Image } = require('../database/index.js');

var getImages = (shoeId) => {
  return Image.findAll({
    where: {
      modelId: shoeId
    }
  });
}

module.exports = {
  getImages
}