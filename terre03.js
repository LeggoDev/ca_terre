const { argv } = require('node:process')

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alphabet = '';
let min = 0;

if (letters.includes(argv[2])) {
    min = letters.indexOf(argv[2])
}

for (let i = 0; i < letters.length; i++) {
    if (i >= min) {
        alphabet += letters[i]
    }
}

console.log(alphabet)
