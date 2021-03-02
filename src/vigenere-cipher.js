const CustomError = require("../extensions/custom-error");

const lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(str, key) {
    if (!str || !key) throw Error('Error')

    let encStr = str.toUpperCase().split('')
    let encKey = key.toUpperCase().split('')
    let result = []

    for (let i = 0; i < encStr.length; i++) {
      if (lang.includes(encStr[i])) {
        if (encKey.length < encStr.length) encKey.push(encKey[i])

        let sumIndex = lang.indexOf(encStr[i]) + lang.indexOf(encKey[i])
        if (sumIndex >= lang.length) sumIndex -= lang.length

        result.push(lang[sumIndex])
      } else {
        result.push(encStr[i])
        encKey.splice(i, 0, ' ')
      }
    }
    if (!this.mode) result.reverse()
    return result.join('')
  }

  decrypt(str, key) {
    if (!str || !key) throw Error('Error')

    let decStr = str.toUpperCase().split('')
    let decKey = key.toUpperCase().split('')
    let result = []

    for (i = 0; i < decStr.length; i++) {
      if (lang.includes(decStr[i])) {
        if (decKey.length < decStr.length) decKey.push(decKey[i])

        let diffIndex = lang.indexOf(decStr[i]) - lang.indexOf(decKey[i])
        if (diffIndex < 0) diffIndex += lang.length

        result.push(lang[diffIndex])
      } else {
        result.push(decStr[i])
        decKey.splice(i, 0, ' ')
      }
    }
    if (!this.mode) result.reverse()
    return result.join('')
  }
}

module.exports = VigenereCipheringMachine;