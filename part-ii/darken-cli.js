var r = process.argv[2] 
var g = process.argv[3]
var b = process.argv[4] 

var colorutil = require('./colorutil.js')

var darkener = colorutil.darken(r,g,b)

console.log(darkener.r, darkener.g, darkener.b)