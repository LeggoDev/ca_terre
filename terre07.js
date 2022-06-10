const { argv } = require('node:process')

const argTab = [];
let tempString = '';
let finalCounter = 0;
let allString = true

for (let i = 0; i < argv.length; i++) {
    if (i > 1) {
        if (/\d/.test(argv[i])) {
            allString = false
        } else {
            argTab.push(argv[i]);
        }
    }
}

tempString = argTab.join()

for (let i = 0; i < tempString.length; i++) {
    finalCounter++
}

if (allString && argv.length <= 3) {
    console.log(finalCounter)
} else {
    console.log('erreur')
}