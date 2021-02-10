const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newArr = []
  if (!Array.isArray(members)) return false
  for (let member of members) {
    if(typeof member === 'string'){
      newArr.push(member.trim().charAt(0).toUpperCase())
    }
  }
  return newArr.sort().join('')
};