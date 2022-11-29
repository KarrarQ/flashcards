class Round {
    constructor() {
        this.currentCard = deck.cards[0];
    }
  
    returnCurrentCard() {
        this.currentCard = this.deck.cards[this.turns];
        return this.deck.cards[this.turns];
      }
    
      takeTurn(guess) {
        let newTurn = new Turn(guess, this.currentCard);
        this.turns++;
        this.returnCurrentCard();
        if (guess !== this.currentCard.correctAnswer) {
            this.incorrectGuesses.push(this.currentCard.id)
          }
        // return newTurn;
      }
}

module.exports = Round;