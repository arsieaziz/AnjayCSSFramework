// Default JavaScript Functions and Initiations
$(document).ready(function() {
  $("#icon-mobile").click(function(){
  	$(".sidebar").toggle();
  	$(".menu").toggle();
  });

$("a").click(function(){
  	if (screen.width <= 576){
  		$(".sidebar").hide();
  	}
});
  
}); // end document ready
