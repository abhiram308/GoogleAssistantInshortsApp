const express = require('express');
const bodyParser = require('body-parser');
const inshortsService = require('./index')

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
  );

restService.use(bodyParser.json());

restService.post('/', function(request, response) {
  var newsType;
  inshortsService.getNewsFromInshorts().then((output) => {
    response.json({ 'fulfillmentText': output });
  }).catch(() => {
    response.json({ 'fulfillmentText': 'Got error' });
  });

});

restService.listen(process.env.PORT || 8080, function() {
  console.log('Server up and listening on port');
});