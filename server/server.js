const express = require('express');
const app = express();
const controller = require('../controller/index.js');
const path = require('path');
const port = 3004;

app.use(express.static('public'));

app.get('/products/:shoeId/gallery', (req, res) => {
  let { shoeId } = req.params;
  controller.get.productImages(shoeId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
