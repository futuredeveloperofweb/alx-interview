#!/usr/bin/node

const request = require("request");

const movieNum = process.argv[2];
const URL = `https://swapi-api.alx-tools.com/api/films/${movieNum}`;

// Makes API request, sets async
request(URL, async function (err, res, body) {
  if (err) return console.error(err);

  // parse each character in the film
  const charURLList = JSON.parse(body).characters;

  // Use URL list to character pages
  // await queues requests
  for (const charURL of charURLList) {
    await new Promise(function (resolve, reject) {
      request(charURL, function (err, res, body) {
        if (err) return console.error(err);

        // finds each character name and prints in URL order
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  }
});
