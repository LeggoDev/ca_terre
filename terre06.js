const { argv } = require('node:process')

const argTab = []

for (let i = argv.length - 1; i >= 0; i--) {
    if (i > 1) {
        let stringTemp = ''
        let stringTempArr = argv[i].split('')

        for (let j = stringTempArr.length - 1; j >= 0; j--) {
            stringTemp += stringTempArr[j]
        }

        argTab.push(stringTemp)
    }
}

console.log(argTab.join(' '))