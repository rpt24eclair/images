const express = require('express');
const app = express();
const controller = require('./controller/index.js');
const path = require('path');
const port = 3004;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/products/:shoeId/gallery', (req, res) => {
  let { shoeId } = req.params;
  // call controller, then return data or err
  controller.getShoeImages(shoeId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(error);
      res.sendStatus(404);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
