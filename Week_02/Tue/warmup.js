//part 1
// var int1 = Math.round(Math.random()*100);
// var int2 = Math.round(Math.random()*100);

// console.log(int1);
// console.log(int2);

// var mean = (int1 + int2)/2;
// console.log(mean);

// var variance = (Math.pow((int1 - mean),2) + Math.pow((int2 - mean),2))/mean
// console.log(variance);

// var stdev = Math.sqrt(variance);
// console.log(stdev);

//part 2
// for(i = 0; i <= int1; i += 2) {
//   console.log(i);
// }

//part 3
// if(int1 > 40){
//   for(i=41; i<=int1; i +=2){
//     console.log(i);
//   }
// }
// else if(int1 < 40){
//   for(i=1; i <= 40; i += 2){
//     console.log(i);
//   }

// }

//part 4
var randnos = []

for(i=0; randnos.length < 20; i++){
  randnos[i] = Math.round(Math.random()*100);
  console.log(randnos[i]);
}

console.log(randnos);
console.log('The max is: ' + Math.max(randnos));
console.log('This min is: '+ Math.min(randnos));

function getMaxOfArray(randnos) {
  return Math.max.apply(null, randnos);
}

function getMinOfArray(randnos) {
  return Math.min.apply(null, randnos);
}

console.log(getMaxOfArray(randnos));
console.log(getMinOfArray(randnos));
// 
// console.log(getMaxOfArray(randnos));
