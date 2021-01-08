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
    var bucketParams = { Bucket : 'sb-gallery' };

    s3.listObjects(bucketParams, function(err, data) {
     if (err) {
       reject(err);
     } else {
       //console.log("Success", data);
       console.log('success')
       let images = data.Contents;
       let keys = [];
       images.forEach( (image) => {
         let filename = image.Key;
         keys.push(filename);
       });
       console.log(keys);
       resolve(keys);
     }
   });
  });
}

//listAllImages();

module.exports.listAllImages = listAllImages;

/*
EXAMPLE RESPONSE DATA

data.Contents.Key

Success {
  IsTruncated: false,
  Marker: '',
  Contents: [
    {
      Key: 'TD1.jpeg',
      LastModified: 2021-01-07T02:57:46.000Z,
      ETag: '"c4b4918707b96fe17fd9490dc7435deb"',
      Size: 95094,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'TD2.jpeg',
      LastModified: 2021-01-07T02:59:38.000Z,
      ETag: '"7fdd21299783ee5bbbb497a762888268"',
      Size: 67185,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'TD3.jpeg',
      LastModified: 2021-01-07T02:59:50.000Z,
      ETag: '"9066e058393572001564ed5aab5f75c5"',
      Size: 128316,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'TD5.jpeg',
      LastModified: 2021-01-07T03:00:03.000Z,
      ETag: '"d63ad5f48a1725969069cefcee08a118"',
      Size: 91795,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'TD6.jpeg',
      LastModified: 2021-01-07T03:07:16.000Z,
      ETag: '"a448ddd4dc50ad302ae898aa76451c96"',
      Size: 66993,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'TD8.jpg',
      LastModified: 2021-01-07T03:07:47.000Z,
      ETag: '"f80a748b1a35c9177af4c0a70bdb0aec"',
      Size: 276728,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'WR1.jpeg',
      LastModified: 2021-01-07T03:14:10.000Z,
      ETag: '"9811d674491f7e6d17583ea882fcaa49"',
      Size: 108103,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'WR2.jpeg',
      LastModified: 2021-01-07T03:14:17.000Z,
      ETag: '"1dadac074f97930f2e2648e3fa1a913b"',
      Size: 68993,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'WR3.jpeg',
      LastModified: 2021-01-07T03:14:21.000Z,
      ETag: '"92faf8fc5738be81aa400e5544ca3c36"',
      Size: 61245,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'WR4.png',
      LastModified: 2021-01-07T03:14:44.000Z,
      ETag: '"9a5bfbd6dfe4eaa11732a4c578e42215"',
      Size: 373919,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'WR5.jpeg',
      LastModified: 2021-01-07T03:15:10.000Z,
      ETag: '"9af73d295f526924f45f02c9aea03bb7"',
      Size: 92576,
      StorageClass: 'STANDARD',
      Owner: [Object]
    },
    {
      Key: 'WR6.png',
      LastModified: 2021-01-07T03:15:21.000Z,
      ETag: '"74d95c7df7f6b0aee382f514922d298d"',
      Size: 1020898,
      StorageClass: 'STANDARD',
      Owner: [Object]
    }
  ],
  Name: 'sb-gallery',
  Prefix: '',
  MaxKeys: 1000,
  CommonPrefixes: []
}
*/