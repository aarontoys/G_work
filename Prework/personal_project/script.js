$(document).ready(function() {
  $('img').click(function(){
    var c = $(this).attr('id');
     switch(c) {
      case "nicki":
        alert("This is Nicki");
        break;
      case "max":
        alert("This is Max");
        break;
      case "zavi":
        alert("this is zavi");
        break;
      case "issy":   
        alert("This is Issy");
        break;
      default :
        alert("This is not Nicki " + c);
    } 
  });
});
