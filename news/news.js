const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('006b195702b8403caba84617183f39b9');

newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2018-01-20',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
})