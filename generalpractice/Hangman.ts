interface GameStatus {
  playing: boolean;
  won: boolean;
  failed: boolean;
}
class HangMan {
  constructor(
    public word: string,
    public times: number,
    public guessedLetters: string[],
    public status: GameStatus
  ) {
    this.word = word.toLowerCase();
    this.times = times;
    this.guessedLetters = [];
    this.status = status;
  }

  getGameStatus() {
    let wordArray: string[] = this.word.split("");
    console.log(wordArray);
    console.log(this.guessedLetters);
    const finished: boolean = wordArray.every(letter =>
      this.guessedLetters.includes(letter)
    );
    if (this.times === 0) {
      this.status.failed = true;
      this.status.playing = false;
      this.status.won = false;
    } else if (finished) {
      this.status.won = true;
      this.status.failed = false;
      this.status.playing = false;
    } else {
      this.status.playing = true;
      this.status.failed = false;
      this.status.won = false;
    }

    console.log(this.status);
  }

  statusMessage() {
    // tell the user how many guesses they have left or
    // if they lost provide them a message with the word
    // and last but not least a messasge that says they guessed the word.
    if (this.status.playing) {
      console.log(`You have ${this.times} guesses left`);
    } else if (this.status.failed) {
      console.log(`nice try! The word is ${this.word}`);
    } else {
      console.log("you guessed the right word!");
    }
  }

  makeGuess(guess: string) {
    guess = guess.toLowerCase();
    console.log(guess);
    // make sure that the same letter is not entered
    const isUnique = !this.guessedLetters.includes(guess);
    console.log(isUnique);
    // if the letter is not included in the word
    const notFound = !this.word.includes(guess);
    console.log(notFound);

    if (this.status.playing === false) {
      return;
    }

    if (isUnique) {
      this.guessedLetters = [...this.guessedLetters, guess];
      console.log(this.guessedLetters);
    }

    if (isUnique && notFound) {
      this.times--;
      console.log(this.times);
    }
  }
}

let game = new HangMan(
  "textbook",
  5,
  ["t", "e", "x", "t", "b", "o", "o", "k"],
  {
    playing: true,
    won: false,
    failed: false
  }
);

game.makeGuess("k");

game.makeGuess("q");
console.log(game.guessedLetters);
game.getGameStatus();
game.statusMessage();
