var r = process.argv[2] 
var g = process.argv[3]
var b = process.argv[4] 

var colorutil = require('./colorutil.js')

var finalVar = colorutil.luminosity(r,g,b)

console.log(finalVar)