import { evaluateGuess } from './evaluator.js';
import { Row } from './row.js';
import { words } from './words.js'
export function correctGuess(guess) {
    for (var item of guess) {
        if (item != 2) {
            return false;
        }
    }
    return true;
}
export class Game {
    constructor() {
        this.activeRow = null;
        this.element = document.createElement("div");
        this.maxGuesses = 6;
        this.answer = null;
        this.start();
    }
    start(){
        this.answer = words();
        this.guesses = [];
        for (var i=0; i < this.maxGuesses; i++) {
            var row = new Row(this.onGuess.bind(this));
            this.element.append(row.element);
            this.guesses.push(row)
        }
        this.currentGuess = null;
        this.activateNextRow();
    }
    activateNextRow() {
        if (this.currentGuess == null) {
            this.currentGuess = 0;
        } else {
            this.currentGuess++;
        }
        if (this.currentGuess == this.maxGuesses) {
            return false;
        } else {
            this.guesses[this.currentGuess].activate();
            return true;
        }
    }
    restart(){
        this.element.innerHTML = "";
        this.start();
    }
    complete() {
        var button = document.createElement("button");
        button.textContent = "Click for new game!!!";
        this.element.append(button);
        button.addEventListener("click", this.restart.bind(this));
    }
    onGuess(row) {
        console.log(row.guess());
        // Call evaluator
        let result = evaluateGuess(row.guess(), this.answer);
        // pass result to row
        row.displayResult(result);
        if (correctGuess(result)) {
            alert("You are the winner!!!");
            this.complete();
        } else {
            // activate next row.
            if (!this.activateNextRow()) {
                alert("sucked in it was "+ this.answer);
                this.complete()
            }
            
        }

    }
}



