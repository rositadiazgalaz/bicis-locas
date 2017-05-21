function validateForm(){
	/* Escribe tú código aquí */
	//Para eliminar spans de validacionea anteriores
	document.querySellectorAll(".form-signup span").forEach(function(span){
		span.remove()
	}); 
	// variables y valores
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var selectorIndex = document.getElementsByTagName("select")[0].selectedIndex;
	var selectorOption = document.getElementsByTagName("select")[0].options;
	var tipoBici = selectorOption[selectorIndex].value;
	var twiter = document.getElementById("input-social").value;
	var check = document.getElementById("check").checked;
	// validaciones. Expressiones regulares para nombre y correo
	var nomVal = /^[A-Za-z]*/;
	var emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
	// verificacion de campo obligatorio para nombre

	if (nombre==""){
	var miSpanError = document.createElement("span");
	var texto = document.createTextNode("Campo obligatorio");
	var contenedor = document.getElementsByClassName("name-container"),[0];
	miSpanError.appendChild(texto);
	contenedor.appendChild(miSpanError);
	console.log("nombre: "+ nombre);
}

	// 

}
validateForm();