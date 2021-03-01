const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let {
    repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'
  } = options
  
  let repeatStr = ''

  for (i = 0; i < repeatTimes; i++) {
    if(str !== undefined)
    str = String(str)
    repeatStr += str

    if (addition !== undefined) {
      addition = String(addition)
      repeatStr += addition

      for (let i = 1; i < additionRepeatTimes; i++) {
        repeatStr += `${additionSeparator}${addition}`
      }
    }

    if (i < repeatTimes - 1) {
      repeatStr += separator
    }

  }
  return repeatStr
};