#!/usr/bin/env node

const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
  console.error('Usage: ./0-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieEndpoint = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

function fetchCharacterNames(characterList, index) {
  if (index >= characterList.length) {
    return;
  }

  request(characterList[index], (error, response, body) => {
    if (error) {
      console.error('Error fetching character:', error);
    } else if (response.statusCode !== 200) {
      console.error(`Error: Received status code ${response.statusCode}`);
    } else {
      try {
        const character = JSON.parse(body);
        console.log(character.name);
      } catch (parseError) {
        console.error('Error parsing character JSON:', parseError);
      }
    }
    fetchCharacterNames(characterList, index + 1);
  });
}

request(movieEndpoint, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Received status code ${response.statusCode}`);
  } else {
    try {
      const movie = JSON.parse(body);
      const characterList = movie.characters;
      fetchCharacterNames(characterList, 0);
    } catch (parseError) {
      console.error('Error parsing movie JSON:', parseError);
    }
  }
});
