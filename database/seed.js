const { Image } = require('./index.js');
const list = require('./s3/s3_listObj.js');

// const modelData = async () => {
//   try {
//     const firstModel = await Image.bulkCreate([
//       {modelId: 1, imageUrl: 'https://sb-images-service.s3-us-east-2.amazonaws.com/TD1.jpeg'},
//       {modelId: 1, imageUrl: 'https://sb-images-service.s3-us-east-2.amazonaws.com/TD3.jpeg'},
//       {modelId: 1, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/TD2.jpeg'},
//       {modelId: 1, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/TD2flip.jpeg'},
//       {modelId: 1, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/TD5.jpeg'},
//       {modelId: 1, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/TD5flip.jpeg'},
//       {modelId: 1, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/TD6.jpeg'},
//       {modelId: 1, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/TD8.jpg'}
//     ]);
//     const secondModel = await Image.bulkCreate([
//       {modelId: 2, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/WR1.jpeg'},
//       {modelId: 2, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/WR2.jpeg'},
//       {modelId: 2, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/WR3.jpeg'},
//       {modelId: 2, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/WR4.png'},
//       {modelId: 2, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/WR5.jpeg'},
//       {modelId: 2, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/WR5flip.jpeg'},
//       {modelId: 2, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/WR6.png'},
//       {modelId: 2, imageUrl: 'https://sb-images-service.s3.us-east-2.amazonaws.com/WR7.jpeg'},
//     ]);
//   } catch (err) {
//     console.log('Unable to seed demo model data');
//     console.error(err);
//   }
// };

const dummyData = async () => {
  //create 98 dummy models

  for (let i = 0; i <= 1666667; i++) {
    var randomArr = [Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000)]
    let urlList = [`https://images-sample-data.s3.us-east-2.amazonaws.com/image${randomArr[0]}.png`,`https://images-sample-data.s3.us-east-2.amazonaws.com/image${randomArr[1]}.png`, `https://images-sample-data.s3.us-east-2.amazonaws.com/image${randomArr[2]}.png`, `https://images-sample-data.s3.us-east-2.amazonaws.com/image${randomArr[3]}.png`, `https://images-sample-data.s3.us-east-2.amazonaws.com/image${randomArr[4]}.png`, `https://images-sample-data.s3.us-east-2.amazonaws.com/image${randomArr[5]}.png`]
    try {
      await Image.bulkCreate([
        {modelId: i, imageUrl: urlList[0]},
        {modelId: i, imageUrl: urlList[1]},
        {modelId: i, imageUrl: urlList[2]},
        {modelId: i, imageUrl: urlList[3]},
        {modelId: i, imageUrl: urlList[4]},
        {modelId: i, imageUrl: urlList[5]}
      ]);
    } catch (err) {
      console.log("Error seeding dummy data image records.")
      console.error(err);
      //break the for loop --> not sure if necessary yet
      return;
    }
  }
};

const seedDB = async () => {
  try {
    // await modelData();
    await dummyData();
  } catch (err) {
    console.log('Failed to seed data');
    console.error(err);
  }
};

seedDB();