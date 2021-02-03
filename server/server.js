const express = require('express');
const app = express();
const controller = require('../controller/index.js');
const path = require('path');
const port = 3004;
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.use(express.static('public'));

app.get('/products/:shoeId/gallery', (req, res) => {
  let { shoeId } = req.params;
  controller.get.productImages(shoeId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});
//create
app.post('/products/:shoeId/gallery',jsonParser,(req, res) => {
  let { shoeId } = req.params;
  console.log(shoeId, req.body)
  controller.post.productImages(shoeId, req.body.imageUrl)
      .then((data) => {
      res.sendStatus(201)
      })
    .catch((err) => {
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
