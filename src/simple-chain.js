const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push(value)
    return this
  },

  removeLink(position) {
    if (position >= 1 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1)
      return this
    }
    this.chain = []
    throw Error('Error')
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    let result = ''
    result = this.chain.map(item => `~( ${item} )~`).join('')
    this.chain = []
    return result.substring(1, result.length - 1)
  }
};

module.exports = chainMaker;