	//Se requiere para la utilizacion de twitter	
	var Twitter = require('twitter-node-client').Twitter;
	var fs = require('fs');

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

    var finalArray = []

	var formato = new Object;

    /*-------------------*/


	/**
	 * [filtroMexico Esta es la primera funcion en ejecutarse, recibe todas las localidades donde se tiene informacion]
	 * @param  {arr} data [Este es el arreglo que contiene todas las descripciones ]
	 *
	 *
	 * 1. Convierte a todos los elementos del arreglo a objeto y filtra todos los de tipo Mexico
	 */

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


	/**
	 * [getTT Obtiene el nombre de la ciudad, el nombre del pais y con eta informacion busca elementos de Treading Topic]
	 * @param  {obj} data [Objetos de tipo Mx]
	 *
	 *
	 * Esta funcion solo ayuda a buscar TT en los elementos de tipo MX
	 */

	function getTT(data){
		data.forEach(function(element){
			city= element.name
			country = element.country
			twitter.getCustomApiCall('/trends/place.json',{id:element.woeid}, error, cincuntaTT);
		})

	}

	/**
	 * [cincuntaTT description]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	function cincuntaTT(data){

		data = JSON.parse(data)

		for(let value of data){

			var tendencias = value.trends

			tendencias.forEach(function(element){

				formato.country = country
				formato.city = city
				formato.name = element.name 
				formato.volume = element.tweet_volume

				finalArray.push(formato)

				formato = {}
			})
		}

		console.log(finalArray);

	}


	
	twitter.getCustomApiCall('/trends/available.json',{}, error, filtroMexico);
	