	//Se requiere para la utilizacion de twitter	
	var Twitter = require('twitter-node-client').Twitter;

	//Callback functions
	var error = function (err, response, body) {
    	console.log(err);
	};
	var success = function (data) {
		console.log(JSON.parse(data))
		console.log(typeof data)

	};

	//Get this data from your twitter apps dashboard
	var config = {
    	"consumerKey": "tnbObJbBa8X7HQIidgFhhJDvg",
    	"consumerSecret": "OyspGkV8C1zG3q4bMlPjh8Z1fn8xfJyyFDSIp65mYD7tmvgeCW",
    	"accessToken": "236623065-TPjp9tNhDQKLgqOBCkvwBW5qGV5LZ2GwaM8CrzEI",
    	"accessTokenSecret": "C957fqMuMhvhTdwYeWKxjwxfGjhd4vhKJeh627csVPhyA",
    	"callBackUrl": ""
	}

	//Se inicializa variable de twitter 
    var twitter = new Twitter(config);

    var final = []

    var city = "", country=""

    /*-------------------*/


	var filtroMexico = function(data){

		data = JSON.parse(data)
		var final = []
		data.forEach(function(element){
			if(element.country == 'Mexico'){
				final.push(element)
			}
		});

		getTT(final);

	}

	function getTT(data){
		data.forEach(function(element){
			city= element.name
			country = element.country
			twitter.getCustomApiCall('/trends/place.json',{id:element.woeid}, error, cincuntaTT);
		})

		// twitter.getCustomApiCall('/trends/place.json',{id:data[0].woeid}, error, cincuntaTT);

	}

	function cincuntaTT(data){

		data = JSON.parse(data)

		for(let value of data){

			var tendencias = value.trends

			console.log(tendencias)

			tendencias.forEach(function(element){

				//falta poner el numero de vistas 

				// var elemento = new Object();

				// elemento.trends = element.name 
				// elemento.country = country
				// elemento.city = city

				// console.log(element)

				// final.push(elemento)
			})
		}


		console.log(final)


	}


	
	twitter.getCustomApiCall('/trends/available.json',{}, error, filtroMexico);
	