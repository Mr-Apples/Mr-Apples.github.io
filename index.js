function wholeGame() {
    var again = "n";
    var adject = prompt("What adjective do you want to use?");
    var noun = prompt("What noun do you want to use?");
    var verb = prompt("What verb do you want to use?");
    var adverb = prompt("What adverb do you want to use?");
    function game(adject, noun, verb, adverb) {
        
        var result = "";

        result += "The " +  adject + " " + noun + " " + verb + " " + "to the store " + adverb + ".";
        
        return result;
    }
    alert(game(adject, noun, verb, adverb ));
    again = prompt("Do you want to go again? Y/n")
    if (again.toLowerCase() == "y") {
        wholeGame();
    }
}
window.addEventListener('DOMContentLoaded', (event) => {
    var play
    play = prompt("Do you want to play my word game? Y/n");
    if (play.toLowerCase == "y") {
        wholeGame();
        alert("Yo!");
        alert("Keep playing the game, it's not that bad.");
        alert("To play again just reload.");
        }
    }
)