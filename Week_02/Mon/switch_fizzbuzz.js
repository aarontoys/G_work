var num = 11
switch (true) {
   case num % 3 === 0 && num % 5 === 0:
    console.log('FizzBuzz');
    break;
  case num % 3 === 0:
    console.log('Fizz');
    break;
  case num % 5 === 0:
    console.log('Buzz');
    break;
  default:
    console.log('Your number is not divisible by 3 or 5 ' + num +', ' + num % 3 +', ' + (num%3===0) )
}



