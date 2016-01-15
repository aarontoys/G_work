var animalSounds = {};
  animalSounds.Lion = 'Roar';
  animalSounds.Dog = 'Bark';
  animalSounds.Cat = 'Meow';
  animalSounds.Duck = 'Quack';
  animalSounds.Pig = 'Oink, Oink';

var animalSoundsArr =[]
var animalSoundsArr2 =[]

for (var key in animalSounds){
    animalSoundsArr.push(key);
    animalSoundsArr2.push(animalSounds[key])
  }
  console.log(animalSoundsArr);

objLen = animalSoundsArr.length;

var tableTxt = document.createTextNode("Animals and the sounds they make:")


var domBody = document.getElementsByTagName('body')[0];
var theadExists = document.getElementsByTagName('thead')[0]

var newTable = document.createElement('table');
var thead = document.createElement('thead');
var tr = document.createElement('tr');
var td = document.createElement('td');


domBody.appendChild(newTable);
newTable.style.borderCollapse = "collapse";
newTable.appendChild(thead);
thead.appendChild(tableTxt);
// thead.appendChild(tr);
// console.log(tr);
// thead.appendChild(tr);
// console.log(tr);


// var textnode = document.createTextNode("Water"); //add this to the td loop
// tr.appendChild(textnode);

var trExists = document.getElementsByTagName('thead')

trExists = trExists[0].children[0];
console.log(trExists);

for(var i = 0; i < objLen; ++i){
  var tr = document.createElement('tr');
  thead.appendChild(tr);
  thead.style.fontWeight = "bold";
  tr.style.fontWeight = "normal";
  tr.style.border = "solid 1px black"
    for (var j = 0; j < 2; ++j){
      var td = document.createElement('td');
      var textnode = document.createTextNode
      tr.appendChild(td);
      if (j){
        var textnode = document.createTextNode(animalSoundsArr2[i])
      }
      else {
        var textnode = document.createTextNode(animalSoundsArr[i])
      }
      // j ? for (var key in animalSounds) {key} : for (var key in animalSounds) {animalSounds[key]}
      // var textnode = document.createTextNode("Water"); //add this to the td loop
      td.appendChild(textnode);
      td.style.border = "solid 1px black"
      td.style.width = "50%"
    }
}

// if(trExists){
//   console.log("tr exists");
// }
// else { console.log("tr nowhere")
// }


