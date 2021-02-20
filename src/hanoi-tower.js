const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  disksNumber = 2 ** disksNumber - 1
  let obj = {}
  obj.turns = disksNumber
  obj.seconds = Math.floor(disksNumber * 3600 / turnsSpeed)
  return obj
}