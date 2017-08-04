$(document).ready(function(){

	$("#p1").click(function(){

		$('#p2').fadeToggle(3000, function(){
			$('#p3').toggle(3000, function(){
				$('#p4').toggle(3000);
			});
		});
	});

});