export class Row {
    constructor(onGuess){
        this.onGuess = onGuess;
        this.element = document.createElement("div");
        this.setup();
    }
    setup(){
        this.element.style.border="1px solid black";
        this.element.style.margin = "10px";
        this.element.style.padding = "10px";
        this.input = document.createElement("input");
        this.element.appendChild(this.input);
        this.input.disabled = true;
        this.input.addEventListener("change", this.submit.bind(this));
    }
    activate() {
        this.input.disabled = false;
        this.input.focus();
    }
    guess() {
        var guess = this.input.value;
        return guess;
    }
    submit(){
        this.onGuess(this);
    }
    displayResult(result){
        let guess = this.guess();
        this.input.remove();
        for (var i=0; i < result.length; i++){
            this.element.innerHTML+="<span class='result result-" + result[i] +"'>" + guess[i] + "</span>";
        }
    }
}