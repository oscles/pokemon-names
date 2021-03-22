import uniqueRandomArray from 'unique-random-array';
import pokemonNames from './pokemon-names.json';

const getRandomItem = uniqueRandomArray(pokemonNames);

function random(number) {
  if (number) {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
  return getRandomItem();
}

module.exports = { all: pokemonNames, random };
