$(document).ready(function(){

	$("button").click(function(){
		$('div').animate({left : '600px'}, 3000, function(){
			$("div").fadeOut(2000);
		});
	});


});