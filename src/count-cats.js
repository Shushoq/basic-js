const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0
  matrix.forEach(cats => {
    cats.forEach(cat => {
      if (cat === '^^') {
        return count += 1
      }
      return 0
    })
  })
  return count
}