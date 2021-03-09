var nr = require('newrelic');
const redis = require("redis");
const express = require('express');
const redisPort = 6379;
const client = redis.createClient(redisPort);
const app = express();
const controller = require('../controller/index.js');
const path = require('path');
const port = 3004;
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const putFromUrl = require('../database/s3/s3_upload.js')
app.use(express.static('public'));
client.on("error", (error)=>{
	console.log(error);
})

app.get('/products/:shoeId/gallery', (req, res) => {
  let shoeId  = req.params.shoeId*1;  
  try{
    client.get(shoeId, async(err, shoe) => {
      if (err) throw err;
      if (shoe) {
        res.status(200).send({data})
       } else {
         controller.get.productImages(shoeId)
           .then((data) => { res.send(data);})
           .catch((err) => {res.sendStatus(404); });
	 }
     })
   } catch(err) {
      res.status(500).send({message:err.message});
     }
});
//create
app.post('/products/:shoeId/gallery', jsonParser, (req, res) => {
  let shoeId  = req.params.shoeId*1;  
  controller.post.productImages(shoeId, req.body.imageUrl)
  .then((data) => {
    console.log(data)
    res.sendStatus(200)
    })
  .catch((err) => {
    console.log(err)
   res.sendStatus(404)
  });
});

//update
app.put('/products/:shoeId/gallery/:imageId', jsonParser, (req,res)=>{
  let {shoeId, imageId} = req.params;
  controller.put.productImages(shoeId, imageId, req.body.imageUrl)
    .then((data)=> {
      res.sendStatus(204)
    }).catch((err)=> {
      res.sendStatus(404)
  })
});
//delete
app.delete('/products/:shoeId/gallery/:imageId', jsonParser, (req,res)=>{
  let {shoeId, imageId} = req.params;
  controller.delete.productImages(shoeId, imageId).then((data)=> {
    res.sendStatus(204);
  }).catch((err)=> {
    res.sendStatus(404)
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
