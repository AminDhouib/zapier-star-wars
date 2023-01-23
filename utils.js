const generateID = function (urlString) {
  if (urlString == null) {
    return 0;
  }

  const pieces = urlString.split("/").reverse();
  // go through the pieces, and only keep the number/integers
  const numbers = pieces.filter((piece) => {
    if (Number.isInteger(piece)) {
      // it's a typeof number, and is an integer
      return true;
    }

    if (Number.isInteger(Number.parseInt(piece, 10))) {
      // we're able to parse this into a number/integer
      return true;
    }

    return false;
  });
  return numbers[0];
};

module.exports = { generateID };
