//Exercise 1

$(document).ready(function (){
  
//Exercise 2
//   $('#secretBox').css("background-color", "white")
//   $('#secretBox').append("<h1>secret box!</h1>");
//   // $('.row div:first-child').removeClass();
//   $('.row div:first-child').addClass("boxType3");
//   $('#row4 div:last-child').css("display", "none");
//   // $('.boxType1').css("background-color", "white")

//   // console.log(('.row div')

  
  
//   var len = $('.boxType1').length

//   for (var i = 0; i <= len; ++i){
//     var $bgcolor = $($('.boxType1')[i]).css('background-color')
//     // console.log($bgcolor)
//      if ($bgcolor === "rgb(255, 0, 0)"){

//     $($('.boxType1')[i]).css("background-color", "white")
//   }
//   }

//   // var $test =$('#row2 div:first-child')
//   // console.log($test.css(*))

//   $('#row2 div:first-child, #row2 div:nth-child(2)').removeClass();
 
//  // console.log($('#row2 div:first-child').css())

// var allBoxes =$('.box:not(#secretBox)')
// allBoxes.css('width', '2px')

//#Exercise 3
  
  $('#container').click(function(e){
    
    var left = $(this).position().left
    var top = $(this).position().top
    left = e.pageX - left
    top = e. pageY - top
    // console.log('X: ' + left + ' Y: ' + top)
      // console.log('X: " +e.pageX)

    // console.log($(e).position())
  });

$('.boxType1').append("<a href='http://www.galvanize.com'>Galvanize</a>")

$('.boxType1 a').click(function(){
  alert("You cannot leave this page!")
  $(this).attr('href', '#')
  // alert($(this ).attr('href'))
});


// var $img = $('<img src="http://spenglercounseling.com/wp-content/uploads/2013/01/Cute-puppy.jpg" style="width: 100%; height: 80%">')
// console.log($img)
// return $('.box img')
var $box = $('.box')
var $boxImg = $('.box img')
// for (i = 0; i <= $('.box').length; ++i){
//   var $boxImg = $('.box')[i]
console.log($boxImg.length)
 
// //working
// $('.box').click(function() {
//   if(!($('.box img').length )) {
//     console.log($(this).length)
//   $(this).append('<img src="http://spenglercounseling.com/wp-content/uploads/2013/01/Cute-puppy.jpg" style="width: 80%; height: 80%">');
// }
// else {
//   $('img', (this)).remove();
// }
// })

$('.box').click(function(){
  $(this).append('<img src="http://spenglercounseling.com/wp-content/uploads/2013/01/Cute-puppy.jpg" style="width: 80%">');




})
  
$('img').click(function(){
  alert("Whoa!!!")
  $(this).remove();
})




});

// Exercise 1
// $(function(){
//   console.log("short hand doc ready");
// });


