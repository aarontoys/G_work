var usersRequest = new XMLHttpRequest();
var usersRequest ;
console.log(usersRequest);
var ul = document.createElement('ul');
// ul.setAttribute('id', 'newul')
var div = document.getElementById('total-likes');
// var docfrag1 = document.createDocumentFragment();
// var docfrag2 = document.createDocumentFragment();

div.appendChild(ul);
// ul.appendChild(docfrag);

usersRequest.onreadystatechange = function (){
  if(this.readyState == 4 && this.status == 200){
    var userListings = JSON.parse(this.responseText);
    console.log(userListings);
    console.log(userListings.length);
    for (var i = 0; i < userListings.length; i+=1){
      // console.log(userListings[i]);
      var userListing = userListings[i];
      var liText = (userListing.name + ": " + userListing.likes);
      var li = document.createElement('li');
      li.innerText = liText;
      ul.appendChild(li);
    }
  }
};


usersRequest.open('GET',  'http://localhost:3000/users' );
usersRequest.send();