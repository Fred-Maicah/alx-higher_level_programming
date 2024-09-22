#!/usr/bin/node

// Import the 'request' library for making HTTP requests
const request = require('request');

// Get the URL from the command-line arguments
const url = process.argv[2];

// Make an HTTP GET request to the specified URL
request.get(url, (error, response) => {
  // If an error occurred during the request, log it to the console
  if (error) {
    console.log(error);
  } else {
    // Otherwise, log the status code of the response
    console.log(`code: ${response.statusCode}`);
  }
});
