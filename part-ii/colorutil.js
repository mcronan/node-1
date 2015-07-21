    var r = process.argv[2] 
	var g = process.argv[3]
	var b = process.argv[4] 

	
	// var luminosity = function(r,g,b) {
	// 	var adder =	.2126*r + .7152*g + .0722*b
	// 	return adder
	// }

	var darken = function(r, g, b) {
		var reducer = .8*r + .8*g + .8*b
		return {
			r : .8*r,
			g : .8*g,
			b : .8*g,
		} 
	}


//  only one of the exports modules will work at a time
// other must be commented out


	// module.exports = {
	// 	luminosity : luminosity
	// 	};

	module.exports = {
		darken : darken
		};
