//Global Variables
var vowelList = ['a','e','i','o','u','y'];
var letterArr = [];
var curVowel = '';
// var storedVowel = ''; -- scope issue - moved to inside letterLoop fxn.

//Helper functions
function createLetterArray (word){
  letterArr = word.toLowerCase().split('');
  return letterArr;
}

function letterLoop (){
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
            break;
          }
          else {return false;}
        }
      }
    }
    else {return false  }    
  };
  if(storedVowel){
    return true;
  } else {return false;};
};

//Controll Function
function hasSameVowels (fxnInput) {
  letterArr = createLetterArray(fxnInput);
  return letterLoop(letterArr);
};

//Test cases
var bzz = hasSameVowels('busy');
console.log(bzz)
var oligopoly = hasSameVowels('STRENGTHLESSNESSES')
console.log(oligopoly)
var zoom = hasSameVowels('CHRONONHOTONTHOLOGOS')
console.log(zoom)

