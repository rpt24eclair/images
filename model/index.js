const { Image } = require('../database/index.js');

var getShoeImages = (shoeId) => {
  return Image.findAll({
    where: {
      modelId: shoeId
    }
  });
}

module.exports = {
  getShoeImages
}