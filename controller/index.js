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
  },
  post: {
    productImages: (shoeId, imageUrl) => {
      return new Promise((resolve, reject) => {
        model.postShoeImages(shoeId, imageUrl)
        .then(res=> resolve('posted'))
        .catch(err=>reject(err))
      })
    }
  },
  put: {
    productImages: (shoeId, imageId, imageUrl) => {
      return new Promise((resolve, reject) => {
        model.modifyShoeImages(shoeId, imageId, imageUrl)
        .then(res=>resolve('updated'))
        .catch(err=>reject(err))

      })
    }
  },
  delete: {
    productImages: (shoeId, imageId) => {
      return new Promise((resolve, reject) => {
        model.deleteShoeImage(shoeId, imageId)
        .then(res=>resolve('delete'))
        .catch(err=>reject( err))
      })
    }
  }
};
