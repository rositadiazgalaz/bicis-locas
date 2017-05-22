function validateForm(){
	/* Escribe tú código aquí */
 
	// variables y valores
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var selector= document.getElementById("select").value;
	var twiter = document.getElementById("input-social").value;
	// validaciones. Expressiones regulares para nombre y correo
	var nomVal = /^[A-Za-z]*/;
	var emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
	// verificacion de campo obligatorio para nombre
//si el input nombre vacio mostrar span "campo obligatorio"
	if (nombre==""){
	var miSpanError = document.createElement("span");
	var texto = document.createTextNode("Campo obligatorio");
	var contenedor = document.getElementsByClassName("input-box")[0];
	miSpanError.appendChild(texto);
	contenedor.appendChild(miSpanError);
	console.log("nombre: "+ nombre);
}

	// verificando primera letra mayuscula en nombre
	else if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre))){
		var texto1 = document.createTextNode("Primera letra en Mayúscula ");
		var miSpanError1=document-createElement("span");
		var contenedor1 = document.getElementsByClassName("input-box")[0];
		miSpanError1.appendChild(texto1);
		contenedor1.appendChild(miSpanError1);
		
		console.log("nombre: "+ nombre+"Primera letra en Mayúscula");
//////// si apellido esta vacio
	} else if(apellido==""){
		var spanApe = document.createElement("span");
		var spantext = document.createTextNode("Campo Obligatorio");
		var contApe = document.getElementsByClassName("input-box")[1];
		spanApe.appendChild(spantext);
		contApe.appendChild(spanApe);


	}
	if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(apellido))){
		var spanApe = document.createElement("span");				
		var spantext = document.createTextNode("La primera letra en Mayúscula");
		var contape = document.getElementsByClassName("input-box")[1];
		spanApe.appendChild(spantext);		
		contape.appendChild(spanApe);
	}
	//comprobando email
	if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email)) ) {
		var spanEmail = document.createElement("span");				
		var spantextoEmail = document.createTextNode("Ingrese correctamente su email");
		var contemail = document.getElementsByClassName("input-box")[2];
		spanEmail.appendChild(spantextoEmail);		
		contemail.appendChild(spanEmail);
	}
	// contraseña 6 digitos no consecutivos
	if((password == "password") || (password == 123456) || (password == 098754) || (password.length < 5) || (password.length > 7 )) {
		var spanPass = document.createElement("span");				
		var textoPass = document.createTextNode("6 dígitos no consecutivos");
		var contPass = document.getElementsByClassName("input-box")[3];
		spanPass.appendChild(textoPass);		
		contPass.appendChild(spanPass);
	}
	// elegir una opcion 
	if(selector == "0" || selector =="") {
		var spanSelect = document.createElement("span");				
		var textoSelect = document.createTextNode("Elige una opción");
		var contselect = document.getElementsByClassName("input-box")[4];
		spanSelect.appendChild(textoSelect);		
		contselect.appendChild(spanSelect);

	}
	// funcion para limpiar los input
	//function inputVacio();
	
	};

	function inputVacio(){
		document.getElementById("name").value = "";
		document.getElementById("lastname").value = "";
		document.getElementById("input-email").value = "";
		document.getElementById("input-password").value = "";
		document.getElementById("select").value = "0";
		document.getElementById("input-social").value = "";
		document.getElementById("el-checkbox").checked = "";
	};
	// imprimir en consola y vaciar campo nombre
	
		//console.log("Nombre: "+nombre);
		//document.getElementById("name").value="";
	
	// CAMPO APELLIDO

// verificando primera letra mayuscula en nombre
	/*else if(nombre.charAt(0)!= nombre.charAt(0).toUpperCase()){
		var texto2 =document.createTextNode("Primera letra en Mayúscula");
		var miSpanError2=document.createElement("span");
		var contenedor2 = document.getElementsByClassName("name-container")[0];
		contenedor2.appendChild(miSpanError2);
		miSpanError2.appendChild(texto2);
		console.log("nombre: "+nombre+". falta mayuscula inicial");*/

