var encode = require('./lib/encoder'),
    decode = require('./lib/decoder');

module.exports = {
  encode: encode,
  decode: decode.decode,
  writeDataToImage: decode.writeDataToImage,
  getImageComponents: decode.getImageComponents,
};
