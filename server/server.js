const express = require('express');
const app = express();
const controller = require('./controller/index.js');
const path = require('path');
const port = 3004;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/products/:shoeId/gallery', (req, res) => {
  let id = req.params.shoeId;

  // call controller, then return data or err
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
