var request = require('request');

request.get('http://pokeapi.co/api/v2/pokemon/54/', 
    function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var response = JSON.parse(body)
  console.log('body:', response.stats[0].stats.name); // Print the HTML for the Google homepage.
  for (var i = 0; i <response.stats.length; i++){
      console.log (response.stats[i].stats.name)
  }
});