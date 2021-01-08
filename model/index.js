const { Image } = require('../database/index.js');

var getShoeImages = (shoeId) => {
  return Image.findAll({
    where: {
      modelId: shoeId
    }
  });
};

// getShoeImages(1).then((images) => {
//   console.log(images);
//   let urls = images.map((image) => {
//     return image.dataValues.imageUrl;
//   });
//   console.log(urls);
// });

module.exports = {
  getShoeImages
};