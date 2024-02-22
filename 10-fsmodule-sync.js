const {readeFileSync} = require('fs')
const fs = require('fs')


const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
    `here is the result : ${first}, ${second}`
    )
//yukardaki kodu yazarken result-sync.txt diye bir 
//dosyam yoktu ama ben onu belirttiğim için
//js otomatik olarak bana olutuşturdu
