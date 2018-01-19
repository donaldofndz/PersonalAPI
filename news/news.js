var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=mx&' +
          'apiKey=006b195702b8403caba84617183f39b9';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })