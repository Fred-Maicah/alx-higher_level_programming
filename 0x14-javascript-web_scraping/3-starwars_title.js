#!/usr/bin/node

// Import the 'request' library for making HTTP requests
const request = require('request');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Ensure a movie ID was provided
if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1); // Exit with an error code
}

// Construct the URL for the Star Wars API using the movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make an HTTP GET request to the Star Wars API
request.get(url, (error, response, body) => {
  // If an error occurred during the request, log it to the console
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  // Check if the response status code is successful (200 OK)
  if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
    return;
  }

  // Try parsing the JSON response body
  try {
    const data = JSON.parse(body);
    // Log the title of the movie to the console
    console.log(data.title);
  } catch (parseError) {
    console.error('Error: Unable to parse response as JSON.');
  }
});
