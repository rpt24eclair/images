const { Image } = require('./index.js');

async function createTables() {
  try {
    await Image.sync();
    console.log('Tables are synched')
  } catch (err) {
    console.log(err);
  }
}

createTables();