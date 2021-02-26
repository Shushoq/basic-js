const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let currentDepth = 1
    let maxDepth = 0

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        currentDepth = this.calculateDepth(el)
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth
        }
      }
    })
    return maxDepth + 1
  }

}