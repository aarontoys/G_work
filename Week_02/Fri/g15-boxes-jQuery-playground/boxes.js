$(document).ready(function (){
  $('#secretBox').css("background-color", "white")
  $('#secretBox').append("<h1>secret box!</h1>");
  // $('.row div:first-child').removeClass();
  $('.row div:first-child').addClass("boxType3");
  $('#row4 div:last-child').css("display", "none");
  // $('.boxType1').css("background-color", "white")

  // console.log(('.row div')

  
  console.log($bgcolor)
  var len = $('.boxType1').length

  for (var i = 0; i <= len; ++i){
    var $bgcolor = $($('.boxType1')[i]).css('background-color')
     if ($bgcolor === "rgb(255, 0, 0)"){

    $($('.boxType1')[i]).css("background-color", "white")
  }
  }

  $('#row2 div:first-child, #row2 div:nth-child(2)').css();
 
 console.log($('.row2 div:first-child, .row2 div:nth-child(2)'))







});

// $(function(){
//   console.log("short hand doc ready");
// });


