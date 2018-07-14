require("dotenv").config();
var request = require("request");
var command = process.argv[2]
var Twitter = require('twitter');
var keys = require("./keys.js");
var client = new Twitter(keys.twitter);
var params = { screen_name: 'ernielove7' };


client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (error) throw error;
  console.log(tweets);
});
