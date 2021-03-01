const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  disksNumber = 2 ** disksNumber - 1
  return {
    turns: disksNumber,
    seconds: Math.floor(disksNumber * 3600 / turnsSpeed)
  }
}