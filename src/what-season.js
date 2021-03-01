const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date ) {
  if(date === undefined) return 'Unable to determine the time of year!'
  if(isNaN(date.getTime())) throw Error('Error')
  
  let month = date.getMonth() + 1
  if(month >= 3 && month <= 5) return 'spring'
  if(month >= 6 && month <= 8) return 'summer'
  if(month >= 9 && month <= 11) return 'autumn'
  else return 'winter'
};
