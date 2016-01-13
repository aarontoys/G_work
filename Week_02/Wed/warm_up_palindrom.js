
//Declare function palindrom that take 1 parameter str
function palindrome (str){
// declare var len and set it to the length of the input parameter str  
  var len = str.length
  // str = str.toLowerCase();
  // declare var caseSen and set it to the result of the confirmation popus
  var caseSen = window.confirm('Do you want your palindrome to be case sensitive?');
  //if caseSen is true (users clicks 'OK'), confirm input parameter str to lower case. If it is false, it exits the if statement
  if (caseSen){
    str = str.toLowerCase();
  }
//create a loop starting with i = 0, increment +1 until your halfway through the string.
    for (var i = 0; i <= Math.floor((len)/2); i++){
//compare the first char with the last char and working from the start and end, respectively to the middle
      if(str.charAt(i) === str.charAt((len - 1 - i))){
      //if chars match and true is returned, set var check = true;
         var check = true;
      }
      else{
      //if chars don't match, set check to false and break out of the loop  
        check = false;
        break;
      }
    }
  //if check is true print to the console  
  if(check){
    console.log(str + " is a palindrome")
  }
  //if check is false, print to the console.
  else console.log(str + " is not a palindrome.")
}

var test0 = "Aaron"
var test1 = "Abccba"
var test2 = "12321"
var test3 = "12344321"
var test4 = "12?-~4~-?21"

var result = palindrome(test0);
var result = palindrome(test1);
var result = palindrome(test2);
var result = palindrome(test3);
var result = palindrome(test4);
