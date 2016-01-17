function toRoman (num) {
    //convert num input to array of numbers
    var romanArr = ["I","V","X","L","C","D","M"]
    var numArr = num.toString().split('')
    var len = numArr.length

      var ones = Number(numArr.pop())
      var tens = Number(numArr.pop())
      var huns = Number(numArr.pop())
      var thou = Number(numArr.pop()) 
 

      var tempResultArr = []
      var finalResutlArr = []


      for(var j = 0; j < len; ++j){
          var digit

          if(j === 0){
            digit = ones
          }
          else if (j === 1) {
            digit = tens
          }
          else if (j === 2) {
            digit = huns
          }
          else {digit = thou}

        tempResultArr = []
        for (i = 1; i <= digit ; ++i){
         
            if(i <= 3){
              tempResultArr.unshift(romanArr[j*2])  
            }
            else if(i <= 4){
              tempResultArr.shift(); 
              tempResultArr.shift();
              tempResultArr.push(romanArr[j*2+1]) ; 
            }
            else if(i <= 5){
              tempResultArr.shift();
            }
            else if(i <= 8){
              tempResultArr.push(romanArr[j*2]);
            }
            else{
              tempResultArr.shift(); 
              tempResultArr.shift();
              tempResultArr.shift();
              tempResultArr.push(romanArr[j*2+2]) ;
            }
          }
          
          finalResutlArr.unshift(tempResultArr.join(''))
      }
          finalResutlArr = finalResutlArr.join('');
          // console.log(finalResutlArr);
          return finalResutlArr;

    } 


module.exports = toRoman;




