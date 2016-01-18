//our code

// module.exports = {
//   function sayHello () {
//     // body...
//     return "hello";
//   }
// };

// function sayHello () {
//   // body...
//   return "hello"
// }

// module.exports = sayHello;

// function myFn (arg){
//   if (arg === 1) {
//     return [];
//   }
//   else {
//     return [2];
//   }  
// }

// This code works . . .
// function myFn (arg){
//    var result = [ ];
//   if (arg === 1 ) {
//     return result;
//   } else if (!(arg % 2)) {
//     result.push(2);
//     return result
//   }

function myFn (arg){
  var result = [];
  if (arg === 0){
    return result;
  }
  else{
      // console.log('else');
    for (var i=2; i<=(arg); ++i){
      // console.log('for');
      // console.log(i);
      while(!(arg % i)){
        // console.log("inside the if");
        arg = arg / i
        result.push(i);
        
       }
    }
  }
  // return result;
}


  // else {
  //   return result;
  // }


  // console.log(result);
module.exports = {
  for: myFn
}