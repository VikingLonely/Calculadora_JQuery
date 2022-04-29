$( function(){
	$("#paragrafo2").click(function(){
		$("#paragrafo1").hide();
	});

	$("input[name=btn]").click(function(){
		alert('Texto enviado com sucesso!');
	});

	/*$("input[name=bt]").click(function(){
		$("#paragrafo2").css("color", "blue");
	});*/

	$("input[name=bt]").on({
		click: function(){
			$("#paragrafo2").css("color", "red");
		},

		mouseenter: function(){
			$("#paragrafo1").hide();
		},
		mouseleave: function(){
			$("#paragrafo2").show();
		}
	});
	
});