const fs = require('fs')
const writeModel = fs.createWriteStream(`model.csv`);
writeModel.write('id,modelId,imageUrl\n', 'utf8');

(async() => {
  var x=0;
  for (var i = 1; i <= 10000000; i++){
    for (var j=1; j<=6; j++){
      x++;
      let urlList = `https://images-sample-data.s3.us-east-2.amazonaws.com/image${Math.floor(Math.random() * 1000)}.png`
      var data = `${x}, ${i}, ${urlList}\n`
      if(!writeModel.write(data)) {
        await new Promise(resolve => writeModel.once('drain', resolve));
      }
    }
  }
})();

