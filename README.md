# pokemon-name

![release date](https://img.shields.io/github/release-date/oscles/pokemon-names)
[![release](https://img.shields.io/github/v/release/oscles/pokemon-names)](https://github.com/oscles/pokemon-names/releases)
[![version](https://img.shields.io/github/package-json/v/oscles/pokemon-names/main)](https://www.npmjs.com/package/poke-names)
[![licence MIT](https://img.shields.io/npm/l/poke-names)](https://opensource.org/licenses/MIT)
![downloads](https://img.shields.io/github/downloads/oscles/pokemon-names/total?color=green)
![size](https://img.shields.io/github/languages/code-size/oscles/pokemon-names)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random names from Pokemon characters.

## Installation

This package is distributed via npm or yarn:

```
npm install poke-names
```

```
yarn add poke-names
```

## Usage

```javascript
const pokemonNames = require('poke-names');
const allPokemonNames = names.all;
const randomPokemonName = names.random();
const threeRandomPokemonNames = names.random(3);
```

### Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

You may have come to this project from different varying sources. There are a
different series of branches for each workshop/course I've done. To get started with
the project, start with this:

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
3. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
4. In the directory you cloned the repository, run `git fetch --all`
