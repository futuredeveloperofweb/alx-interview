#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: ./0-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, { json: true }, (err, res, body) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  if (res.statusCode !== 200) {
    console.error(`Error: ${res.statusCode}`);
    process.exit(1);
  }

  const characters = body.characters;
  if (!characters) {
    console.error('No characters found');
    process.exit(1);
  }

  characters.forEach(characterUrl => {
    request(characterUrl, { json: true }, (err, res, body) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      if (res.statusCode !== 200) {
        console.error(`Error: ${res.statusCode}`);
        process.exit(1);
      }

      console.log(body.name);
    });
  });
});

