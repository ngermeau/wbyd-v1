const path = require('path');
const sharp = require("sharp");
var fs = require('fs');

var files = fs.readdirSync('img_original');

files.forEach((filename) => {
  console.log(filename);
  const originalImage = path.resolve(__dirname, "img_original/" + filename);

  sharp(originalImage)
    .resize(190,270)
    // .sharpen()
    .jpeg({ mozjpeg: true })
    .toFile(path.resolve(__dirname, "img/" + filename));
});
