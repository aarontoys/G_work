var rndNo = Math.floor(Math.random() * (10000 - 1000)) + 1000
var noArr = rndNo.toString().split('');
var origNo = noArr;
var sum =0;
var noList = [];
var j = 0

//first challenge: 
//Generate a random number from 1000 to 9999 and output the sum of its digits.
//For example, if the number is 1049, then the output should be 14.

console.log("First challenge:")

for(var i = 0; i < noArr.length; ++i){
    
    var digit = parseInt(noArr[i]);
    sum += digit;
}
console.log(origNo);
console.log(sum);

//second challenge: 
//Generate a random number from 1000 to 9999 and output the sum of its digits, repeatedly, dropping the left-most digit after each iteration, until there is only one digit only.
//For example, if the number is 1049, then the output should be 14, 13, 13, 9.
console.log("Second challenge:") 
 secondSum = 0; // 
 while(j < noArr.length) {
  for(var i = j; i < noArr.length; ++i){
    
    var digit = parseInt(noArr[i]);
    secondSum += digit;
    // console.log(sum);
    
}
  j +=1;
  noList.push(secondSum);
  secondSum = 0;

}
  

console.log(origNo);
console.log(noList.join(', ').trim());




// console.log(digit);
// console.log(noArr);
