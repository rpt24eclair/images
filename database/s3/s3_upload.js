let variables = require('./env.js');
const fs = require('fs');
var request = require('request');
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: variables.region});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});
// const fileContent = fs.readFileSync(fileName);
// const params = {
//   Bucket: images-sample-data,
//   Key: 'image.jpg', // File name you want to save as in S3
//   Body: fileContent
// };
// return s3.upload (params, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } if (data) {
//     console.log("Upload Success", data.Location);
//   }
// })

function putFromUrl(url, bucket, key, callback) {
  request({
      url: url,
      encoding: null
  }, function(err, res, body) {
      if (err)
          return callback(err, res);

      s3.putObject({
          Bucket: bucket,
          Key: key,
          ContentType: res.headers['content-type'],
          ContentLength: res.headers['content-length'],
          Body: body,
          ACL:'public-read'
      }, callback);
  })
}


exports.putFromUrl = putFromUrl
// node s3_upload.js BUCKET_NAME FILE_NAME
