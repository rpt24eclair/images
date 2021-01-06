const { Image } = require('./index.js');

const modelData = async () => {
  try {
    const firstModel = await Image.bulkCreate([
      {modelId: 1, imageUrl: url},
      {modelId: 1, imageUrl: url},
      {modelId: 1, imageUrl: url},
      {modelId: 1, imageUrl: url},
      {modelId: 1, imageUrl: url},
      {modelId: 1, imageUrl: url}
    ]);
    const secondModel = await Image.bulkCreate([
      {modelId: 2, imageUrl: url},
      {modelId: 2, imageUrl: url},
      {modelId: 2, imageUrl: url},
      {modelId: 2, imageUrl: url},
      {modelId: 2, imageUrl: url},
      {modelId: 2, imageUrl: url}
    ]);
  } catch (err) {
    console.log('Unable to seed demo model data');
    console.error(err);
  }
}

const dummyData = async () => {
  //create 98 dummy models
  for (let i = 3; i <= 100; i++) {
    let url = randomImage();
    //upload 6 pics for each
    try {
      //{modelId: i, imageUrl: url, locationIndex: 1},
      await Image.bulkCreate([
        {modelId: i, imageUrl: url},
        {modelId: i, imageUrl: url},
        {modelId: i, imageUrl: url},
        {modelId: i, imageUrl: url},
        {modelId: i, imageUrl: url},
        {modelId: i, imageUrl: url}
      ]);
    } catch (err) {
      console.log("Error seeding dummy data image records.")
      console.error(err);
      //break the for loop --> not sure if necessary yet
      return;
    }
  }
}

function randomImage() {
  //need to create s3 functions show all urls in bucket (listObj)
  //generate random index from length of bucket
  //return random image url within bucket
  return url;
}

const seedDB = async () => {
  try {
    await modelData();
    await dummyData();
  } catch (err) {
    console.log('Failed to seed data');
    console.error(err);
  }
}

seedDB();