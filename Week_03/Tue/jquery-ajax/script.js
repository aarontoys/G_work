

$('#call').on('click', function(){
  var title = $('#title').val();
  var plot = $('#plot').val();
  var responseType = $('#res').val();
  var url = 'https://www.omdbapi.com/?t='+title+'&y=&plot='+plot+'&r='+responseType;

  // $.ajax({
  //   url: url,
  //   method: "GET",
  //   success: function(data) {
  //     console.log(data);
  //   }
  // });

//using $.get is same as $.ajax - just a different syntax
$.get(url, function(data){
  console.log(data);
});
});






