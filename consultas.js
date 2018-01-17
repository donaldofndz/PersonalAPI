	//Example calls

	// twitter.getUserTimeline({ screen_name: 'donaldofm', count: '1'}, error, success);
	
	// var mentions = twitter.getMentionsTimeline({ count: '1'}, error, success);
	
	// twitter.getHomeTimeline({ count: '10'}, error, success);
	
	// twitter.getReTweetsOfMe({ count: '10'}, error, success);
	
	// twitter.getTweet({ id: '1111111111'}, error, success);

	// Get 10 tweets containing the hashtag haiku

	// twitter.getSearch({'q':'#haiku','count': 10}, error, success);
	
	// Get 10 popular tweets with a positive attitude about a movie that is not scary 

	// twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);

    // My calls 
    
	// twitter.getCustomApiCall('/trends/closest.json',{ lat:'37.781157', long:'-122.400612831116'}, error, success);