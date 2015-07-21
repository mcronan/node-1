
var request = require('request');
var color = process.argv[2]
var _ = require('underscore')

var theRequest = request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json',
	function(error, response, body) {
		if(!error && response.statusCode == 200){
			var theBody = JSON.parse(body)
			console.log(theBody)
			 var colorFind = _.find(theBody, function(pap) {
				return pap.name.toLowerCase() === color.toLowerCase()  	
		})
		console.log(colorFind.rgb.r)
	}

 })

		// if(pap.name === "PapayaWhip") {
		// 	console.log(pap)
		// }
	

// console.log(papayawhip)