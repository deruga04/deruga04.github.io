$(window).on('load', function(){
	game.init();
});

var game = {
	init: function() 
	{
		$(".gameLayer").hide();
		$("#gameStartScreen").show();

		game.canvas = $("#gameCanvas")[0];
		game.context = game.canvas.getContext('2d');
	},
}

