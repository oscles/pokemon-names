import pokemonNames from '../';

describe('poke-names', () => {
  describe('all', () => {
    test('should to be an array', () => {
      const pokemonType = typeof pokemonNames.all;
      expect(pokemonType).toEqual('object');
    });

    test('should to be an array off string', () => {
      const stringArray = pokemonNames.all.every(
        (pokemon) => typeof pokemon === 'string',
      );
      expect(stringArray).toBeTruthy();
    });

    test('should to contain `Celesteela`', () => {
      expect(pokemonNames.all).toContain('Celesteela');
    });
  });

  describe('random', () => {
    test('should to return a random item from the pokemonNames.all', () => {
      const randomPokemon = pokemonNames.random();
      expect(pokemonNames.all).toContain(randomPokemon);
    });

    test('should to return an array of random if passed a number', () => {
      const randomItems = pokemonNames.random(3);
      expect(randomItems).toHaveLength(3);
      randomItems.forEach((item) => expect(pokemonNames.all).toContain(item));
    });
  });
});
