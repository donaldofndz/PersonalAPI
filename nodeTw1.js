	//Callback functions
	var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};
	var success = function (data) {
		console.log(JSON.parse(data))
		console.log(typeof data)

	};

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

	function cincuntaTT(data){
		data = JSON.parse(data)
		console.log("El resultado es: ");
		console.log(data[0])

	}

	function getTT(data){
		// data.forEach(function(element){
		// 	twitter.getCustomApiCall('/trends/place.json',{id:element.woeid}, error, cincuntaTT);
		// })
		// 

		twitter.getCustomApiCall('/trends/place.json',{id:data[0].woeid}, error, cincuntaTT);

	}

	var Twitter = require('twitter-node-client').Twitter;

	//Get this data from your twitter apps dashboard
	var config = {

	}

    var twitter = new Twitter(config);

    // My calls 
    
	// twitter.getCustomApiCall('/trends/closest.json',{ lat:'37.781157', long:'-122.400612831116'}, error, success);
	
	twitter.getCustomApiCall('/trends/available.json',{}, error, filtroMexico);
	
	//Example calls

	// twitter.getUserTimeline({ screen_name: 'donaldofm', count: '1'}, error, success);
	
	// var mentions = twitter.getMentionsTimeline({ count: '1'}, error, success);
	
	// twitter.getHomeTimeline({ count: '10'}, error, success);
	
	// twitter.getReTweetsOfMe({ count: '10'}, error, success);
	
	// twitter.getTweet({ id: '1111111111'}, error, success);

	//	116545


	
	//
	// Get 10 tweets containing the hashtag haiku
	//

	// twitter.getSearch({'q':'#haiku','count': 10}, error, success);
	
	//
	// Get 10 popular tweets with a positive attitude about a movie that is not scary 
	//

	// twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);