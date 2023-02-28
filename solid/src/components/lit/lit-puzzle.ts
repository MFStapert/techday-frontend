import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';

const TOTAL_GUESSES = 6;
const correctWord = 'avisi';


export class LitPuzzle extends LitElement {
  constructor() {
    super();
    document.addEventListener('keyup', (e) => {

      if (this.remainingGuesses === 0) {
        return;
      }

      let pressedKey = String(e.key);
      if (pressedKey === 'Backspace' && this.nextLetter !== 0) {
        this.deleteLetter();
        return;
      }

      if (pressedKey === 'Enter') {
        this.checkGuess();
        return;
      }

      let found = pressedKey.match(/[a-z]/gi);
      if (found && found.length == 1) {
        this.insertLetter(pressedKey);
      }
    });
  }

  static styles = css`
  .board {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .letterbox {
    border: 2px solid gray;
    border-radius: 3px;
    margin: 2px;
    font-size: 2.5rem;
    font-weight: 700;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
  
  .filledbox {
    border: 2px solid black;
  }
  
  .correct {
    background-color: #0AD771FF
  }
  .semicorrect {
    background-color: #ffcc33
  }
  .incorrect {
    background-color: #dedfe3
  }
  
  .letterrow {
    display: flex;
  }
  `;

  remainingGuesses = TOTAL_GUESSES;
  guessesMade: Array<Array<string>> = [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']];
  nextLetter = 0;

  insertLetter(pressedKey: string) {
    if (this.nextLetter === 5) {
      return;
    }
    pressedKey = pressedKey.toLowerCase();

    this.guessesMade[TOTAL_GUESSES - this.remainingGuesses][this.nextLetter] = pressedKey;
    this.nextLetter += 1;
    this.requestUpdate();
  }

  deleteLetter() {
    this.guessesMade[TOTAL_GUESSES - this.remainingGuesses][this.nextLetter - 1] = '';
    this.nextLetter -= 1;
    this.requestUpdate();
  }

  checkGuess() {
    if (this.remainingGuesses < 1) {
      return;
    }
    if (this.guessesMade[TOTAL_GUESSES - this.remainingGuesses].includes('')) {
      alert('Niet genoeg letters!');
      return;
    }
    if (this.guessesMade[TOTAL_GUESSES - this.remainingGuesses].join('') === correctWord) {
      this.remainingGuesses = 0;
      this.requestUpdate();
      setTimeout(() => alert('Correct! Lekker gewerkt!'), 10);
      return;
    } else {
      this.remainingGuesses -= 1;
      this.nextLetter = 0;
      this.requestUpdate();

      if (this.remainingGuesses === 0) {
        setTimeout(() => {
          alert('Helaas, je hebt verloren!');
          alert(`Het juiste woord was: "${correctWord}"`);
        }, 10);
      }
    }
  }

  render() {
    return html`
        <div class="board">
            ${repeat(this.guessesMade, _ => Math.random(), (guess, guessIndex) => html`
                <div class="letterrow">
                    ${repeat(guess, _ => Math.random(), (letter, letterIndex) => {
                        const classes = {
                            letterbox: true,
                            filledbox: letter,
                            correct: guessIndex < TOTAL_GUESSES - this.remainingGuesses && letter == correctWord.split('')[letterIndex],
                            semicorrect: guessIndex < TOTAL_GUESSES - this.remainingGuesses && letter != correctWord.split('')[letterIndex] && correctWord.split('')
                                    .includes(letter),
                            incorrect: guessIndex < TOTAL_GUESSES - this.remainingGuesses && !correctWord.split('').includes(letter)
                        };
                        return html`
                            <div class="${classMap(classes)}">${letter}</div>`;
                    })}
                </div>
            `)}
        </div>
    `;
  }
}

