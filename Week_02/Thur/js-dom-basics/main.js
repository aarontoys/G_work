// console.log("sanity check!")

// var firstParagraph = document.getElementById('main');
// console.log(firstParagraph);

// var getAllElements = document.getElementsByTagName('ul');
// console.log(getAllElements)

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement)

allListItems = document.getElementsByTagName('li');
console.log(allListItems);

for (var i = 0; i < allListItems.length; ++i){
  console.log(allListItems[i]);
}

// var evenElements = document.getElementsByClassName('even');
// console.log(evenElements)

// var oddElements = document.getElementsByClassName('odd');
// console.log(oddElements)

// var firstEvenElement = document.getElementsByClassName('even')[0];
// console.log(firstEvenElement)

// var firstOddElement = document.getElementsByClassName('odd')[0];
// console.log(firstOddElement)

// var main = document.querySelector('#main');
// console.log(main);

// var firstOddElement = document.querySelector('.odd');
// console.log(firstOddElement);

// var cNode = document.getElementsByTagName('li')[0];
// cNode =cNode.parentNode;
// console.log(cNode);

// for (var i = 0; i < allListItems.length; i++) {
//   console.log(allListItems[i].innerText);
// }

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);

// document.getElementById('main').style.backgroundColor = "goldenrod";

// var propertyTest = document.getElementById('main')
// propertyTest.style.color = "teal";

// var odds = document.getElementsByClassName('odd')
// for (i = 0; i < odds.length; ++i){
// odds[i].style.fontVariant = "small-caps";}  


// var evens = document.getElementsByClassName('even')
// for (i = 0; i < evens.length; ++i){
// evens[i].style.border = "1px black solid"
// }

var newLi = document.createElement('li');
console.log(newLi);

var newLiElement = newLi.innerText = "a new list item";
console.log(newLiElement);
console.log(newLi);

getSingleElement.appendChild(newLi);
console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
console.log(anotherListElement);
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);

var inTheMiddle = document.createElement('li');
inTheMiddle.innerHTML = "This is a <strong>very</strong> good day";
console.log(inTheMiddle);
getSingleElement.insertBefore(inTheMiddle, getSingleElement.children[3]);
console.log(allListItems);

var remChild = getSingleElement.removeChild(getSingleElement.children[5]);
console.log(remChild);





