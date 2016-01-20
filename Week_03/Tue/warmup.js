//Define Globals
  //word array
  word = [];
  allVowels = ['a','e', 'i', 'o', 'u', 'y'];
  vowels = []; 
  curVowel = '';
  storedVowel = '';

//Define Fxn that takes word as argument
function createArry (arg) {
  // body...
  word = arg.toLowerCase().split('');
  // console.log(word)
  return word;
}



  //Start Looping throgh word array

function loopWord (){
  // console.log(storedVowel === '');
  for (i = 0; i < word.length; ++i){
    for(j = 0; j < allVowels.length; ++j){
      // console.log(j)
      if(word[i] === allVowels[j] && storedVowel === ''){
        curVowel = allVowels[j];
        storedVowel = curVowel
        console.log(storedVowel + ' 1st if loop ')
      }
      continue;
      // else{console.log(word[i] + "   Arrg!")}
      // else if(word[i] === allVowels[j]){
        
      //   curVowel = allVowels[j];
      //   console.log(curVowel + ' curVowel');
      //   console.log(storedVowel + ' storedVowel' );
      //     if(storedVowel === curVowel){
      //       storedVowel = curVowel
      //       }
      //     else{
      //       console.log("The word does not cotain only the same vowel")
      //       break;
      //     }
          
      // }
    }  
  }
    
  }



    //Inner loop to check each vowel - using vowel.length

// function compareVowels (){
//   for (j = 0; j < allVowels.length; ++j);
//     var checkVowel = allVowels[i];
//     return checkVowel;
// }


      //If the letter of word array matches a vowel, set curVowel to vowel.
      //Then set storedVowel to curVowel

function bigFinalFxn (mainArg){
  word = createArry(mainArg);
  loopWord(word);
  ;

  // console.log(isVowel);
}      
bigFinalFxn('Kate');