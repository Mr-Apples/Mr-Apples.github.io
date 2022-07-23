// Given the answer, and a guess determines how many letters matched
// A correct letter in the correct space returns a "2"
// A correct letter in the wrong space returns a "1" 
//      Exclude any letters that were already a perfect (#2) match, or 
// Any other letters return 0.
export function evaluateGuess(guess, answer){    
    var result = Array.from({length: answer.length}, (v, i) => 0);
    const guessArray = Array.from(guess);
    var answerArray = Array.from(answer);

    // find correct letters in the correct space
    for (var i = 0; i < answer.length; i++) {
        if (guessArray[i] == answerArray[i]) {
            result[i] = 2;
            answerArray[i] = null; // Prevent future matches
        }
    }
    // find correct letters in the incorrect space
    for (var i = 0; i < answer.length; i++) {
        if (result[i] != 0) continue;
        for (var j = 0; j < answer.length; j++) {
            if (i == j) continue; // If this letter matches in the same spot, it should have matched as a #2
            if (guessArray[i] == answerArray[j]) {
                result[i] = 1;
                answerArray[j] = null;
            }
        }
    }
    return result;
}