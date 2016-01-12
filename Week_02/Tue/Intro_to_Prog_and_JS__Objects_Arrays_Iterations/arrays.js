var myArray = ["Kyle", "Danny", "CJ", "Roberto"];

console.log(myArray[0],
  myArray[1],
  myArray[2],
  myArray[3]);

console.log(myArray);

myArray[0] = "Ember Dude";

console.log(myArray);

delete myArray[3];

console.log(myArray);
console.log(myArray[3]);