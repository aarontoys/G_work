$(document).ready(function() {
  $('img').click(function(){
    var c = $(this).attr('id');
     switch(c) {
      case "nicki":
        // alert("This is Nicki");
        $('.add-p').remove();
        $('img').last().after($('<p class="add-p">This is my Wife Nicki. We\'ve been married for 13 years.</p>'));

        break;
      case "max":
        // alert("This is Max");
        $('.add-p').remove();
        $('img').last().after($('<p class="add-p">This is my oldest son, Max. He\'s 9 years and he loves playing footfall and is crazy about the Broncos!</p>'))
        break;
      case "zavi":
        // alert("this is zavi");
        $('.add-p').remove();
        $('img').last().after($('<p class="add-p">This is my only daughter Zavi. Zavi is short for Zahava, which means gold in Hebrew.</p>'))
        break;
      case "issy":   
        // alert("This is Issy");
        $('.add-p').remove();
        $('img').last().after($('<p class="add-p">This is my youngest son, Issy. He\'s 4 and really, really cute!</p>'))
        break;
      default :
        alert("This is not Nicki " + c);
    } 
  });
});
