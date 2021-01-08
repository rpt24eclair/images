const model = require(../model/index.js);

module.exports = {
  get: {
    images: (shoeID) => {
      return new Promise((resolve, reject) => {
        model.getShoeImages(shoeID)
        .then((images))
    }
  }
}