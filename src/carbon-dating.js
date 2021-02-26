const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_NUM_2 = 0.693

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string' ||
    +sampleActivity <= 0 ||
    isNaN(sampleActivity) ||
    +sampleActivity > MODERN_ACTIVITY) return false

  let age = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (LOG_NUM_2 / HALF_LIFE_PERIOD))
  return age

};