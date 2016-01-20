//define global variables
// vowelList
var vowelList = ['a','e','i','o','u','y'];
// word
var letterArr = [];
// curVowel
var curVowel = '';
// storedVowel
var storedVowel = '';
// 
// splite word in array, make lowercase -> return array 
function createLetterArray (word){
  letterArr = word.toLowerCase().split('');
  return letterArr;
}
//
// 
// loop through each letter of arry and find first vowel
function letterLoop (){
  // console.log(letterArr);
  storedVowel = '';
  for(var i = 0; i < letterArr.length; ++i){
    var j = 0;
    if(storedVowel === ''){
      for( j; j < vowelList.length; ++j){
        if(letterArr[i] === vowelList[j]){
          // console.log(letterArr[i]);
          curVowel = storedVowel = letterArr[i];
          // return true;
          break;
        }
      };
    } 
    else if(storedVowel === curVowel){
      for(j; j < vowelList.length; ++j){
        if(letterArr[i] === vowelList[j]){ 
          if(letterArr[i] === storedVowel){
            curVowel = letterArr[i];
            // return true;
            break;
          }
          else {return false;}
        }
      }
    }
    else {return false  }    // console.log( letterArr[i])  ; //I think I want to remove this!
  };
  if(storedVowel){
    return true;
  } else {return false;};

};

// 
// 
// 
// set first vowel to storedVowel
// 
// 
// 
//  continue loop and find second vowel
// 
// 
// 
//  set second vowel to curVowel
// 
// 
// 
//  if storedVowel = curVowel, continue to loop and compare, else return false
// function isStored (){
//   var i = 0;
//   if(storedVowel === ''){
//     letterLoop();
//     storedVowel = letterArr[i];
//   };
//   else{
//     letterLoop();
//   }
// };
// 
// 
// 
// 
// Controller Fxn: calls the following helper fxns:
function hasSameVowels (fxnInput) {
  // body...
  letterArr = createLetterArray(fxnInput);
  /*var answer = */ return letterLoop(letterArr);
  // letterLoop(letterArr)
  // console.log(letterArr); 
  // console.log(answer);

};
//    create array of letters from the work (lowercase) -> return array
//    loop through each letter of arry and find first vowel
//    set first vowel to storedVowel
//    continue loop and find second vowel
//    set second vowel to curVowel
//    if storedVowel = curVowel, continue to loop and compare, else return false
// 
var bzz = hasSameVowels('bzzz');
console.log(bzz)
var oligopoly = hasSameVowels('STRENGTHLESSNESSES')
console.log(oligopoly)
var zoom = hasSameVowels('CHRONONHOTONTHOLOGOS')
console.log(zoom)
// 
// 
// 
// 
// 
