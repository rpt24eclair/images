const request = require('request');
const fs = require('fs')
for (var i = 901; i <= 1000; i++){
  let fileStream = fs.createWriteStream(`./images/image${i}.png`);
  request('https://picsum.photos/200').pipe(fileStream);
}