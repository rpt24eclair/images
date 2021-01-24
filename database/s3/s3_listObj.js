let variables = require('./env.js');
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: variables.region});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling listObjects
// Call S3 to obtain a list of the objects in the bucket
const listAllImages =  () => {
  return new Promise((resolve, reject) => {
    var bucketParams = { Bucket : 'sb-gallery-image1' };

    s3.listObjects(bucketParams, function(err, data) {
     if (err) {
       reject(err);
     } else {
       console.log('success')
       let images = data.Contents;
       let keys = [];
       images.forEach( (image) => {
         let filename = image.Key;
         keys.push(filename);
       });
       resolve(keys);
     }
   });
  });
}

module.exports.listAllImages = listAllImages;