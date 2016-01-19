var ranNum = Math.floor(Math.random()*100+1);
console.log(ranNum);

var submit = document.getElementsByTagName('button')[0];
// console.log(submit);

function guessNum (){
    var guess  = document.getElementById('number').value;
    // console.log(guess);
    guess = parseInt(guess);
    if(guess < ranNum){
      alert(guess + " is too low");
    }
    else if(guess === ranNum){
      alert("You win! Game over . . . ");
    }
    else{
      alert(guess + " is too high, try again!");
    }
}

submit.addEventListener("click", function(){
  guessNum();
});