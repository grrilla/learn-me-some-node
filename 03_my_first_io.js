var fs = require('fs')

var fileContents = fs.readFileSync(process.argv[2])

var arr = fileContents.toString().split("\n")

console.log(arr.length - 1)
