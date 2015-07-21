var r = process.argv[2] 
var g = process.argv[3]
var b = process.argv[4] 

var luminosity = .2126*r + .7152*g + .0722*b

var isLight = (luminosity > 155)

console.log( isLcd ight ? 'light' : 'dark')