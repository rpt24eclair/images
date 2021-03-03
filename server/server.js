var nr = require('newrelic');
const express = require('express');
const app = express();
const controller = require('../controller/index.js');
const path = require('path');
const port = 3004;
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const putFromUrl = require('../database/s3/s3_upload.js')
app.use(express.static('public'));

app.get('/products/:shoeId/gallery', (req, res) => {

  let shoeId  = req.params.shoeId*1;  
  controller.get.productImages(shoeId)
    .then((data) => {
      console.log(data)
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
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
