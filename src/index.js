const uniqueRandomArray = require('unique-random-array');
const pokemonNames = require('./pokemon-names.json');

module.exports = {
  all: pokemonNames,
  random: uniqueRandomArray(pokemonNames),
};
