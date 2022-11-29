const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

    let cardOne, cardTwo, cardThree, deck, round;
  
    beforeEach(() => {
      cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      cardTwo = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
      cardThree = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
      deck = new Deck([cardOne, cardTwo, cardThree]);
      round = new Round(deck);
    })
  
    it('should be a function', function() {
      expect(Round).to.be.a('function');
    });

});