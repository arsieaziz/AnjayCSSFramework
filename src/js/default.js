// Default JavaScript Functions and Initiations
$(document).ready(function() {
  $("#icon-mobile").click(function(){
  	$(".sidebar").toggle();
  	$(".menu").toggle();
  });
  $("a").click(function(){
  	$(".sidebar").hide();
  });
  
}); // end document ready
