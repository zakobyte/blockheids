const Block = require('./block');

let block1 = new Block("20/07/2017", "Genesis", '0');

let block2 = new Block("20/07/2018", {"name": "some-data"}, block1.hash)

console.log(block1)
console.log(block2)