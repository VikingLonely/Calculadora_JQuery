$( function(){
	var valor1, valor2, op;
	var novoNumero= false;
	$("input[name=bt]").click(function(){
		if(novoNumero){
			$("#resultado").val('');
			$("#resultado").val($("#resultado").val() + $(this).val());
			novoNumero = false;

		}
		else{
			$("#resultado").val($("#resultado").val() + $(this).val());
		}
	});

	$("input[name=soma]").click(function(){
		if($("#resultado").val() != ''){
			valor1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			op = "soma";
			$("#op").text($(this).val());
		}
		else{
			alert('Por favor. Insira um valor para fazer a operação!');
		}
	});

	$("input[name=sub]").click(function(){
		if($("#resultado").val() != ''){
			valor1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			op = "sub";
			$("#op").text($(this).val());
		}
		else{
			alert('Por favor. Insira um valor para fazer a operação!');
		}
	});

	$("input[name=mult]").click(function(){
		if($("#resultado").val() != ''){
			valor1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			op = "mult";
			$("#op").text($(this).val());
		}
		else{
			alert('Por favor. Insira um valor para fazer a operação!');
		}
	});

	$("input[name=div]").click(function(){
		if($("#resultado").val() != ''){
			valor1 = parseFloat($("#resultado").val());
			$("#resultado").val('');
			op = "div";
			$("#op").text($(this).val());
		}
		else{
			alert('Por favor. Insira um valor para fazer a operação!');
		}
	});

	$("input[name=igual]").click(function(){
		if($("#resultado").val() != ''){
			valor2 = parseFloat($("#resultado").val());
			if(op == "soma"){
				$("#resultado").val(valor1 + valor2);
				$("#op").text('');
				novoNumero= true;
			}
			else if(op == "sub"){
				$("#resultado").val(valor1 - valor2);
				$("#op").text('');
				novoNumero= true;
			}
			else if(op == "mult"){
				$("#resultado").val(valor1 * valor2);
				$("#op").text('');
				novoNumero= true;
			}
			else if(op == "div"){
				$("#resultado").val(valor1 / valor2);
				$("#op").text('');
				novoNumero= true;
			}
		}
		else{
			alert('Por favor. Insira um valor para fazer a operação!');
		}
	});

	$("input[name=c]").click(function(){
		var aux = $("#resultado").val().length;

		var valor = $("#resultado").val();
		valor = valor.replace(valor.charAt(aux - 1), "");
		$("#resultado").val(valor);
	});

	$("input[name=CE]").click(function(){
		$("#resultado").val('');
		$("#op").text('');
		valor1 = null;
		valor2 = null;
	})

	
});