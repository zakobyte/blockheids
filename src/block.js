const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(timestamp, data, previousHash) {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.timestamp + this.data + JSON.stringify(this.previousHash)).toString();
  }
}

module.exports = Block;