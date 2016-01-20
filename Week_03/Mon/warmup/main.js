// globals
var rndNum = Math.floor(Math.random()*1000);
var body = document.getElementsByTagName('body')[0];
var div = document.getElementsByTagName('div')[0];
var msg = '';
console.log(rndNum);
var count = 0;

// event listener
document.getElementById('mySubmit').addEventListener('click', function(event) {
  event.preventDefault();
  count += 1;
  guessingGame();
});


// helper functions

function guessingGame () {
  
  var guess = document.getElementById('guessInput').value;
  console.log(guess);
  // console.log("guessing fnx");


  if(parseInt(guess) === rndNum){
    console.log("You guessed right!!!!");
    msg = "You guessed right!!! It took you " + count + " guesses";
    addGuess(msg);
  }
  else if(guess < rndNum){
    console.log("You guessed too low");
     msg = "Guess " + count + ": " + guess + " is too low, try a higher number!";
    // console.log(body);
    addGuess(msg);
  }
  else{
    console.log("You guessed too high!");
     msg = "Guess " + count + ": " + guess + " is too high, try a lower number!";
    addGuess(msg);
  }

}

function addGuess (innerHTML){
  var p = document.createElement('p');
  p.innerText = innerHTML;
  div.insertBefore(p, div.childNodes[0]);
}

