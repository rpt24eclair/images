const model = require('../model/index.js');

module.exports = {
  get: {
    productImages: (shoeID) => {
      return new Promise((resolve, reject) => {
        model.getShoeImages(shoeID)
          .then((images) => {
            let urls = images.map((image) => {
              return image.dataValues.imageUrl;
            });
            resolve(urls);
          })
          .catch((err) => {
            reject(err);
          });
        });
    }
  }
}