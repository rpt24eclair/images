const pgtools = require('pgtools');
require('dotenv').config();
//sudo psql student -h 127.0.0.1 -d sbgallery
var { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: '54.193.118.157',
  database: 'sbGallery',
  password: process.env.DB_PASS,
  port: '5432'

});

client.connect().then(res=>console.log(res)).catch(err=>console.log(err));
var query = `INSERT INTO Images(id, modelId, imageUrl) VALUES (1, 1, 'hi.jpg');`
client.query(query, (err, res) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('records inserted');
  client.end();
  });