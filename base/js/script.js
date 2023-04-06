$(function() {
  // jQuery goes here...


  /*
//video 49 actividad de codificacion meorar la pokedex

var urlApiPoke = "https://pokeapi.co/api/v2/generation/1";
var urlPokeByName= "https://pokeapi.co/api/v2/pokemon/";

//nota el getJESON() recibe la URL donde va a realizar la peticion  y tambien se le puede pasar una funcion (){} como en el video 47
//la funcion done () recibe una funcion donde se especifique que sera hecho una vez se reciban los datos
//la funcion fail() recibe una funcion donde se especifican lo que sucedera si falla la petcion
//la funcion Always() recibe una funcion que especificaa que sucedera siempre que se realice una peticion falle o no falle
$.getJSON(urlApiPoke).done(function(data){
	//console.log(data.pokemon_species);
	$("<ol>").attr("id", "listaOrdenada2").appendTo(".pokes");
	$.each(data.pokemon_species, function(index, valores){//se pide qe recorra el array de objetos y por cada iteracion de pokemon_species
		// se pasa una funcion que recibe el index y los valores del index
		let nombrePokemon = valores.name.charAt(0).toUpperCase()+valores.name.slice(1);
		//let linkTag = $("<a>").attr("id", valores.name).attr("href", valores.url).text(nombrePokemon).append("<li>");
		let linkTag =$("<a>").attr("id", valores.name).attr("href", "#").text(nombrePokemon); //ceamos el tag name con todo lo necesario
		let li = $("<li>").append(linkTag); //creamos el tag li y le metimos el taglink y lo guardamos en una variable

		//ahora ahqui generaremos un evento para obtener la onformacion especifica por pokemon con lo que tenemos
		//y luego cramos un evento que capture el  click en el link y hacemos otra peticion ajax para buscar todos os datos del pkemon
		linkTag.click(function(event){
			$.getJSON(urlPokeByName+valores.name).done(function(datosXPoke){
				console.log(datosXPoke);
				//creamos una variable que guarde la ruta de la imagen y la guardamos
				let src = datosXPoke.sprites.front_default;
				let src1 = datosXPoke.sprites.back_default;
				let src2 = datosXPoke.sprites.front_shiny;
				let src3  = datosXPoke.sprites.back_shiny;

				//luego creamos un tag img y le seteamos el attr SRC guardado previamente
				let img = $("<img>").attr("src",src ).css("width","20%");
				let img1 = $("<img>").attr("src",src1 ).css("width","20%");
				let img2 = $("<img>").attr("src",src2 ).css("width","20%");
				let img3 = $("<img>").attr("src",src3 ).css("width","20%");
				//creamos una variable que guarde el nombre del pkemon
				let namePoke =datosXPoke.name;
				let h2 = $("<h2></h2>").text(datosXPoke.name);
				let cajaDeLuz = $(".lightbox2").empty().append(h2).append(img).append(img1).append(img2).append(img3).fadeIn();
				// cajaDeLuz.append(h2);
				// cajaDeLuz.append(img);
				$(".lightbox2").click(function(){
				 	$(this).fadeOut();
				 })
				
*/
//esto fue copiado como modelo 
				// 		// AORA QUEREMOS DARLE CLICK A UNA IMAGEN Y QUE SE VEA EN UN LIGTHBOX
				// 	galeriaImagenes.click(function(){
				// 	let src = $(this).attr("src");
				// 	let img = $("<img>").attr("src", src).css("width","100%");
				// 	$(".lightbox").empty().append(img).fadeIn();
				// })
				// 	$(".lightbox").click(function(){
				// 	$(this).fadeOut(1000);
				// })

			});
			event.preventDefault(); 
		}) 
		


		li.appendTo("#listaOrdenada2"); //para luego meterlo en la lista ordenada
		//console.log(linkTag)
	})
})




  /*
// vdeo 48 actividad de codigficacion recuperacion de datos  de pokemon
//   https://pokeapi.co/
//   https://pipedream.com/apps/swapi

var urlApiPokemon = "https://pokeapi.co/api/v2/generation/1"

$.getJSON(urlApiPokemon).done(function(datosPokemones) {
	console.log(datosPokemones);
	$("<ol>").attr("id","listaOrdenada").appendTo("#pokemones");
$.each(datosPokemones.pokemon_species, function(index, value){
	console.log(value);
	
	//luego para colocar con estilo el dato podemos usar la funcion toUppercase a la primera leta pero esa funcion solo convierte la primera letra
	// es decir esta variable estaria guardando solo la primea letra en mayuscula de cada pokemon asi que debemos mostrar lo demas
	// pero si solo le agregamos el nombre nuevamente me va a volver a repetir la primera letra, asi que debemos usar la siguiente
	//fncion slice(1) le colocamos 1 porqu significa que continue con la letra de la posicion  1 y la cero la ignore
	let nombrePokemon = value.name.charAt(0).toUpperCase()+ value.name.slice(1);
	$("<li>").appendTo("#listaOrdenada").text(nombrePokemon);
});

}).fail(function(error) { // esta se ecutara cuando falle la obtncion de datos
	alert("la LLamada a la Pokeapi fallo ")
	console.log(error);
}).always( function(){ //esta funcion s ejecutara siempre falle o no
	alert("los pokemones son del enemigo")
})

*/
/*
//video 47 RECUPERACION DE  IMAGENES DE FLICKR AA TRAVEZ DE LA API DE FLICKR(+COPRENSION DE JSON);
pagina web libre    ---->>>>    https://www.flickr.com/services/feeds/docs/photos_public/

var urlApiFlickr = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; //la URL sola falla le agregaron esto => ?jsoncallback=?
$.getJSON(urlApiFlickr, {
	tags: "sol, playa",
	tagmode: "any",
	format: "json",
	lang: "es-us"
}).done(function(datosRecibidos) { //que hara nuestra api al recibir los datos con la peticion get json a la api externa
	console.log(datosRecibidos); //aqui vemos que retorna un objeto con los datos y uno de ss attr es un objeto de las img
	//vamos a llamar una funcion de JQUERY que hace facil iteral los objetos o la matriz recibida $.each
	$.each(datosRecibidos.items, function(indice,valor){ //seleccionando la parte que contine el onjeto de items visto en consola
		// agregamos una funcion que es lo que queremos hacer con esos datos seleccionados en el each,luego queremos que 
		//tome el index y el value y luego metemos la logica en{} para que imprima cada uno de esas posiciones
		console.log(valor.media);

		let img= $("<img>").attr("src", valor.media.m).appendTo("#flickr");//este codigo crea una imagen seteandole los valores al source SRC
		//y liego a traves de appendTo los incorpora como hijos del div con ID flickr
		//pero ahora supongamos que no queremos las 20 sino qe solo queremos las primeras 3

		if (indice ==2) {
			return false;

			//despues si quieres que esas tres ocupen el 100% de la pantalla 
			// .css("width", "33%"); le agregas al final de la itiqueta
			
		}
	}); 

	// aqui le dimos un estilo adicional a la imagenes cuando se recibieron pero no pude meterlas en un lightbox  esta por practicar esa parte


				var gal = $("#flickr").find("img");
				gal.css("width", "33%").css("opacity","0.70" );

				gal.mouseenter(function(){
					$(this).stop().fadeTo(400,1);
				})
				gal.mouseleave(function(){
					$(this).stop().fadeTo(1000,0.7);
				})
				
				gal.click(function(){
					$(".lightbox").empty().append(gal).fadeIn();	
					$(".lightbox").click(function(){
					 	$(this).fadeOut(1000);
					 })
				});
						

}).fail(function() { // que hara si falla  la peticion 
	alert("Fallo la llamada getJSON a la API flickr");
});


*/

/*
//VIDEO 45  y 46 QUE ES AJAX -> ASINCONICO JS Y XML  
//FUNCIONES QUE OFRECE JQUERY PARA REALIZAR PETICIONES AJAX SON $.get(), $.post(), $.getJSON();

// primera fncion para recuperarr achivos de si propio servidor. 
//$.load();
$("#code").load("js/script.js");

//este codigo no me fnciona no se si es por la compu del trabajo o que.

$("#code").load("js/script.js", function( response, status) {
	if (status == "error") {
		alert("Could not find js/script.js");
	}
	console.log(error) 

	/*script.js:17 no se que error es este pero no me imprime como sale en el curso
        
       Uncaught ReferenceError: error is not defined
    at HTMLElement.<anonymous> (script.js:17:14)
    at HTMLElement.<anonymous> (jquery-1.12.3.min.js:4:29694)
    at Function.each (jquery-1.12.3.min.js:2:2881)
    at n.fn.init.each (jquery-1.12.3.min.js:2:846)
    at Object.<anonymous> (jquery-1.12.3.min.js:4:29676)
    at i (jquery-1.12.3.min.js:2:27449)
    at Object.fireWith [as rejectWith] (jquery-1.12.3.min.js:2:28213)
    at y (jquery-1.12.3.min.js:4:22856)
    at XMLHttpRequest.c (jquery-1.12.3.min.js:4:26989)
	

});
*/


/*
//VIDEO 43  ACTIVIDAD DE CODIFICACION COMLETAR LA VALIDACION DEL FORMULARIO A ENVIAR

$("#form").submit(function(evento) {

	var name = $("#name").val();
	var password = $("#password").val();
	var email = $("#email").val();
	var message = $("#message").val();

	validarNombre(name, evento);
	validarPassword(password, evento);
	validarEmail(email, evento);
});

//funcion de validad nombre
function validarNombre(name, evento) {
	if (!isValidName(name)) {
		$("#name-retro").text("Por favor ingrese un nombre Valido");
		evento.preventDefault();
	}else{
		$("#name-retro").text("");
	}
}
//funcion que determina que nombre es valido
function isValidName(name){
	return name.length >=  2;
}

//funcion de validad password
function validarPassword(password, evento) {
	if (!isValidPassword(password)) {
		$("#password-retro").text("Por favor ingrese una password Valida minimo 5 caracteres");
		evento.preventDefault();
	}else{
		$("#password-retro").text("");
	}
}
//funcion que determina que password es valida
function isValidPassword(password){
	return password.length >=  5 && /.*[0-9].*///.test(password); //esto es para agregar caracteres alfanimericos
//}

/*
//funcion de validad email
function validarEmail(email, evento) {
	if (!isValidEmail(email)) {
		$("#email-retro").text("Por favor ingrese un email Valido no repetido ejemplo@ejemplo.com");
		evento.preventDefault();
	}else{
		$("#email-retro").text("");
	}
}
//funcion que determina que email es valido
function isValidEmail(email){
	return email.length >=  5;
}
*/



  /*
//video 42 MANEJO DE EVENTO DE ENVIO

$("#form").submit(function(event) {
	var textArea = $("#message");
	if (textarea.val().trim() == "") { //val()valor del texto trim() que recorta los espacios vacios ls quita
		textarea.css("box-shadow","0 0 4px #811");

		//si esta condicio sucede n quiero que se vuelva a carga la pagina quiero que se cumpla antes de que se envie 
		//el formulario (evitar incumplimientos) de cuando ocurra ese evento o se de click en el evento 
		//que en este caso es el envio del formulario
		event.preventDefault();
	} else{

	}
});
*/




//video 41 eventos de cambio
 
 /*$("#checkbox").change( function() {
 	let estaCheck = $(this).is(":checked") // esto es igual a -> .prop("checked")
 	if (estaCheck) {
 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #666");
 	}else{
 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
 	}
 }),

/////////////////////EJEMPLO DE MOSTRAR UNA LISTA DESPLEGABLE AL SELECCIONAR EL CHECKBOX  //////////////////////////////
$("#checkbox").click( function(){
	var checked = $(this).prop("checked");
	if (checked) {
		$("#desplegable").removeAttr("hidden");
	}else{
		$("#desplegable").attr("hidden", "hidden");
	}

})

/*



  /*
//video 40 eventos II  formularios EVENTOS FOCUS Y BLUR
 // para crear sombras en los input cuando los sleccionas o cand le colocas text
 var inputs = $("input:text, input:password, input:email textarea");
 inputs.focus( function() {
 	$(this).css("box-shadow", "0 0 4 px #666");
 });
 inputs.blur(function() {
 	$(this).css("box-shadow", "none");//sobra en la etiqueta
 });
 $("#name").blur(function() {
 	let inputText = $(this).val();
 	if (inputText > 3) {
 		$(this).css("box-shadow", "0 0 4px #811");
 	}else{
 		$(this).css("box-shadow", "0 0 4px #181");
 	}
 });
*/



  /*
//video 39 keydomw ESTO NO FNCIONA EN CUALQUIER NAC¿VEGADOR
$("html").keydomw(function(evento){ 
	alert(evento.which);
}); 
//DESAFIO DESCUBRIR EL VALOR DE UNA TECLA Y LUEGO
// CADA VEZ QUE LA PESIONES MOVER EL CUADRO 10 PX  A LA DERECHA CADA VEZ QUE LA PRESIONE

let CLAVE_LETRA = 34;// esto es un ejemplo no funciono en este navegador ni en el chrome
$("html").keydomw(function(evento) {
	if (evento.width==CLAVE_LETRA) {
		$(".blue-box").stop().animate({
			margin-left: "+=10px";
		},50)
	}
})
*/

/*
//video 38 
var galeriaImagenes = $(".galery").find("img");
galeriaImagenes.css("width", "33%").css("opacity","0.70" );

galeriaImagenes.mouseenter(function(){
	$(this).stop().fadeTo(400,1);
})
galeriaImagenes.mouseleave(function(){
	$(this).stop().fadeTo(1000,0.7);
})

// AORA QUEREMOS DARLE CLICK A UNA IMAGEN Y QUE SE VEA EN UN LIGTHBOX
galeriaImagenes.click(function(){
	let src = $(this).attr("src");
	let img = $("<img>").attr("src", src).css("width","100%");
	$(".lightbox").empty().append(img).fadeIn();
})
$(".lightbox").click(function(){
	$(this).fadeOut(1000);
})


*/


/*// video  37 PASAR DATOS ADICIONALES A LOS EVENTOS
$("#btn-click"). click({
	usuario: "Francisco",
	pagina: "www.FranciscoBurgos.com",
	curso: "jQuery"
}, function(evento){
	saludarsuaro(evento.data);
})

function saludarsuaro(datosUsuarios){
	nombreUsuaro = datosUsuarios.usuario;
	paginaUsuario= datosUsuarios.pagina;
	curso=  datosUsuarios.curso;
	alert("Bienvenido " + nombreUsuaro+ " a su pagina " +paginaUsuario+ " donde aprende "+curso+" !");
}
*/

// video 36  eventos delegados estos funcionan cuando se agrean nuevos nodos que  sus hermanos tenian previamente
//eventos y a stos nuevs no les cae esos eventos
//
/*$("li li").on("click", function(){
	$(this).slideUp();
});*/
/*$("#content2").on("click", "li li", function(){//para que fnciones debo colocar el bloque div no sirve con selectores
  	$(this).slideUp();
  });*/
//podemos comprobarlo al agregar a esta clase estos nuevos nodos no desaparecen 
// para sluciona eso debems hacer eventos delegados y agregarle un segundo parametro a la funcion previa
//$(".subItems").append("<li> yo soy el ultimo item del primer ul </li>")

/*
//video 34  agregar el mismo controlador para varis eventos

	
	var galeryImg =$(".galery").find("img");

	galeryImg.on("click", pasarSiguienteImg );


//refactorizando codigo
var imgsSrc=[
		"images/laptop-mobile_small.jpg",
		"images/laptop-on-table_small.jpg",
		"images/people-office-group-team_small.jpg"
	];
	var i=0;
function pasarSiguienteImg(){
	i=(i+1)% imgsSrc.length;
	$(this).fadeOut(function(){
		$(this).attr("src", imgsSrc[i]).fadeIn();
	});
}

//NOTA: esto quiere decir, que primero busque en la class .galery un tag que se llame img
// luego que lo consiga que agregue un evento de click pero que al ejecutarse antes de finalzar en evento click
//que primero haga una funcion de callback oculando el elemento seleccionado y tambien  que antes de terminar de 
//ocultar ese elemento que inmediatamente aparezca el otro elemento del array de imagenes

*/
	
	

/*
// video 32 y 33 adicion de controladores flotantes hovers
$(".green-box").hover(function(){
	//alert("se acaba de pasar el maose por arriba de la box green-box")
	$(this).text("Yo era harvard"); //esta funcion cambia el text uando se pasa por encima el mouse
});

//ahora vamos a hacer que ele evento de desvanecersse solo ocurra cuando
//el maose eta adentro del elemnto , y cuando salga vuelva a su orignal
 //NOTA se puede hacer de esta anera o tambien guardando la seleccion del div en una variable 
 //y luego aplicarle a esa variable las fncionalidades.

 $(".blue-box").mouseenter(function(){
 	$(this).stop().fadeTo(500,0.3);
 });
$(".blue-box").mouseleave(function(){
	$(this).stop().fadeTo(500,1);
});

//Otra manera de hacer este control de eventos con el hover(handlerIn, handlerOut)
//basicamente lo que hace es haciendo callback de os metodos fadeTo()  :

$(".yellow-box").hover(function(){
	$(this).stop().fadeTo(500,0.5);
},function(){
	$(this).stop().fadeTo(500,1);
});
*/

/*
//video 30 y 31 Eventos y controladores de eventos
$(".red-box").click(function(){
	let resp= prompt("seguro que desea desvanecer el elemento ?");
	if (resp ==="si") {
		alert("desvaneciendo elemento");
	$(this).fadeTo( 1000, 0.8);
}else{
	alert("gracias por no desvanecerlo");
}
})
*/
/*
//video 28 y 29  recuperar y cambiar el contenido de un elemento
//.text() o .html();
let parrafo = $("p:first");
console.log(parrafo.text());
console.log(parrafo.html());
console.log($("p").html()); // en todos los caso me sale la misma informacion 
//NOTA en teoria en . text () me debe traer el text del parrafo,
//mientras que e .html(), debe traer las etiquetas que conienen todos el texto incluso si hay mas de una
//como por ejemplo parrafos  que tengan detro style o span etc 

parrafo.text("<strong>Hello</strong> World"); // aqui en esta funcion para agregar me trae todo incluso la etiqueta

 parrafo.html("<strong>Hello</strong> World"); // mientras que esta solo trae el texto 
//nota para que se puedan ver la diferencia debes comentar una de las dos  
parrafo.html(parrafo.html() +"esta es otra parte dl texto")

*/


/*
//video 27 Agregar o quitar clases de CSS

let lis= $("li li").addClass(function(index){//toma todos los li y los mete en un aray y en esa funcion toma ese index
	$(this).addClass("nuevaClaseitem"+ index);
});//este metodo esta tomando todos los elements que cumplan estas ondiciones
console.log(lis.length); //en nuestro caso hay 8

let divs = $("div").addClass(function(index, currentClass){
	if (currentClass === "white-box") {
		$(this).removeClass("white-box");
		return "red-box";//esta funcion no me funciono no se porque pero despues lo verifico
	}//NOTA despues de removerle la clase que tenia asignada ahi si me tomo el cambio
});
console.log(divs.length);

*/
  /*
// video 26 manipular las propiedades del CSS  de os elementos
//primero para que no sea moleto desaparecemos el carrusel
//$(".galery").hide(); 
// o tambien podemos hacerlo mas largo
$(".galery").css("display", "none");

//tomamos la propiedad del Box
let propiedadBoxRed = $(".red-box");

console.log(propiedadBoxRed);//asi muestra un miercolero de cosas
console.log(propiedadBoxRed.css("width"));// asi mustra solo los pixeles de esa propiedad
console.log(propiedadBoxRed.width()); // asi muestra el ancho para sacar calulos sin el PX
/////////////////////////////////////////////////////
propiedadBoxRed.css("background-color","aa7700");// aqui establece la propiedad al box de rojo a naranja
$("p").css("fontSize","28px"); // aqui selecciona un nuevo elemento y le establecela propiedad puede escribirse tambien "font-size"
propiedadBoxRed.css("width","+=10px"); //aca le modif el tamaño sumando al existente
///////////////////////////////////////////////////////////
//tambien puede hacer arrays de propiedades tmadas de algun elemento
 let allPropertiesRedBox = $(".red-box").css(["background-color", "width","height","margin-left","margin-top", "padding"]);
 console.log(allPropertiesRedBox); //lo imprime en  formato de objeto
 console.log(allPropertiesRedBox["background-color"]);// y luego podemos acceder a algun elemento en particular

propiedadBoxRed.css("user-select", "none"); // esta propiedad evta qe el teto sea seleccionado
// tambien se pueden hacer de esta anera sutituyendo el vaor de la prpiedad por una funcion por ejemplo
propiedadBoxRed.css("width", function(){
	if ($(this).css("width") >= "80px" || $(this).css("width") <= "100px") {
		alert("el ancho de la caja no esta dentro de los estandares");
		return "200px";
	}else{
		alert("el ancho de la caja esta dentro de los estandares")
	}
})
	*/



/*
//repaso video 25 ceacion de slider imagenes
var galerydiv = $(".galery").find("img").first();
var imgsSrc=[
	"images/laptop-mobile_small.jpg",
	"images/laptop-on-table_small.jpg",
	"images/people-office-group-team_small.jpg"
]

var i=0;
setInterval(function(){ // a todo esto se le llama call back significa que set interval no se ejecutara hasta que 
	i=(i+1)% imgsSrc.length;
	galerydiv.fadeOut(function(){//la funcion fadeOut sea ejecutada , 
		$(this).attr("src", imgsSrc[i]);
		$(this).fadeIn();
	},0)
},3000)
*/
//video 25 manipulacion de eventos y atributos en el DOM
/*var galery = $(".galery").find("img").first();

var srcImgs = [
	"images/laptop-mobile_small.jpg",
	"images/laptop-on-table_small.jpg",
	"images/people-office-group-team_small.jpg"
]
console.log(srcImgs);

var indice=0;

setInterval(function(){
 indice = (indice+1) % srcImgs.length; // 0,1,2,0,1,2,0,1,2....
 galery.fadeOut(function(){
 	$(this).attr("src", srcImgs[indice]);
 	$(this).fadeIn();
 	
 });
 	console.log(galery);
},3000);
*/
// VIDEO 24 MANIPULACIO DE==================================================================================0
// ATTR(); devuelve el nombre del typo de atrbuto seleccionado
// PROP(); devuelvo una verificacion del atributo ejemplo en un checkbox si esta checked devuelve true o false dependiendo
//VAL();
/*
var divs = $("div");
console.log(divs.attr("id")); //solo toma el primer div en este caso  ver como guardar varios DIV no toma como attr class
var input = $('input');
console.log(input.attr("type")); //solo toma el primer attr de input no todos  y no toma el attr name 

input.attr('type', 'submit'); // le asigna el type submit a todos los input

var checkbox = $('input:checkbox');//con esto se captura el input de type checkbox
console.log( checkbox.prop("checked")) //y luego de capturar el tag se accede a la verificacion de ese tag esta  verificado con true o false
console.log( checkbox.attr("checked")) // con este metodo solo trae el nombre de ese atributo

var submit =$("input[type=submit]");
console.log(submit.val());//esto solo funciona para input que reciban texto

//pr ejemplo
var inputText =$("input:text");
inputText.val("Francisco Burgos")
console.log(inputText.val());// y otro cosa es que para que lo muesre el valor debe estar ingresado como prpiedad value""
//de lo contrario si lo agregas despues de que esta desplegada la pagina no lo toma 

var inputRange= $(" input [input=' range']");
console.log(inputRange.val());
*/

//video 23 remove elemenet, detach()====================================================================================

//$("h1, input").remove().not($("input[type=textarea], textarea"));

//ota forma de escribirlo es:
//$("form").children().not($("input:text, textarea, br")).remove();
/*
var elementDetach= $("li").detach(); //elimina los elemento con ese node pero se pueden recuperar si los guardas en variable
$("#content4").append(elementDetach);


$("p:first").empty();

$(".red-box, .green-box, .blue-box, .black-box, .yellow-box").empty();
*/
//video 22  funcio replacewith
/*
  // Replace each selected item with another one.
  // For instance, replace all <p> tags with another one.
  $("p:first").replaceWith("<p>I've been replaced.</p>")

  // Again, to construct more complex elements, you may want
  // to do that in a callback function:
  $("p:last").replaceWith(function() {
    return "<p>Complex new paragraph...</p>";
  });

  // Also, you can again replace an element with another existing
  // element which will remove it from its original position.
  $(".red-box").replaceWith($(".blue-box"));

  // You can also replace multiple items at the same time.
  $("li:first, li:last").replaceWith("<li>First or last list item</li>");
  
	
	$("<div class ='red-box'>Replaced</div>").replaceAll("ul ul");


*/



//video 20 DOM añadir elemnetos
/*$("ul ul:first").append("<li> yo soy el ultimo item del primer ul </li>");
$("ul ul:first").prepend("<li> yo soy el primer item del primer ul </li>");

//si no se especifica aqui -> ul:first agrega a todos los sub ul partiendo del ul seleccionado en nuestro caso 
//si hubieran muchos sub ul y dentro otros sub ul mas tambien los afectaria

$("<li> yo soy el ultimo item del ultimo ul </li>").appendTo($("ul ul:last"));// tambien funciona si no colcamos el $ en la parte del ul ul:last
$("<li> yo soy el primer item del ultimo ul </li>").prependTo($("ul ul:last"));// tambien funciona si no colcamos el $ en la parte del ul ul:last

$(".green-box").after("<div class= 'green-box'> otra Verde </div>"); //coloca una caja despues de la seecconada

$(".black-box").before("<div class = 'black-box'>caja negra</div>") //coloca una caja anes de la selccioanda

$(".yellow-box").before(function(){
	return "<div class = 'yellow-box'>caja amarilla</div>"
});

// You can also use a callback function to construct more complex
  // elements to add to the DOM
  $(".green-box").after(function() {
    // Maybe more complex string of new element(s)
    return "<div class='green-box'>New Green</div>";
  });

  // 4) Add existing elements to other existing elements
  // -> This will move the added element, so the original vanishes

  // For instance, add the #list after the first paragraph (removes it from its
  // original position).
  // In case it's added to multiple elements, jQuery must clone the added element.
  $("p:first").after($("#list"));*/
/*
First Variant Equivalent 
source.append(target) target.appendTo(source)
source.prepend(target) target.prependTo(source)
source.after(target) target.insertAfter(source)
source.before(target) target.insertBefore(source)*/

// video 19 metodos de filtrado
/*
$("#list").children("li").filter(":even").css("background-color","rgba(180,180,30, 0.8)");

$("li").filter(function(index) {//esta interacion lo que hace es que ve cada elemento li como un index
    return index % 3 == 0; 
     // y aqui devuelve  elresultado de recorrer cada index de li , en nuestro caso tenemos 3 li y cada li tiene otros li dentros
     //entonces el programa recorre cada elemento padre de li y todos sus hijos conmo un eleento unido  es por eso 
     //que al colocar la esta funccion nos pinta los tres li 
  }).css("background-color","rgba(180,180,30, 0.8)");

$("li").first().css("background-color","rgba(180,180,30, 0.8)");
$("li").last().css("background-color","rgba(180,180,30, 0.8)");
$("li").eq(4).css("background-color","rgba(180,180,30, 0.8)");
$("li").eq(-2).css("background-color","rgba(180,180,30, 0.8)");
*/
//video 18 otros medios de seleccionar elementos o llamados metodos Transversal

//$("#list").parents().css("background-color","rgba(180,180,30, 0.8)") // selecciona los padres , abuelos y sucesivamente partiendo del seletor
//$("#list").parent().css("background-color","rgba(180,180,30, 0.8)") // selecciona el padre inmediato part del sector actual
//$("#list").children().css("background-color","rgba(180,180,30, 0.8)") //selcciona todos los hijos directos de ese selector
//$("#list").find("li").css("background-color","rgba(180,180,30, 0.8)") 
// selecciona todos los elementos li del documento y si estan dentros de otros  los sobre selcciona haciendo mas oscuro el clor
//$("body").find("input").css("background-color","rgba(180,180,30, 0.8)")// busca los elementos input dentro del selector seleccionado en este cas BODY







//video 17  selectores de CSS con JQuery
/*
$("p").css("background-color","rgba(180,180,30, 0.8)");
$("#list").css("background-color","rgba(180,180,30, 0.8)");
$("li").css("background-color","rgba(180,180,30, 0.8)");
$("input[type=text]").css("background-color","rgba(180,180,30, 0.8)");
$("p, h2, form").css("background-color","rgba(130,180,30, 0.8)");
$("p:first").css("background-color","rgba(110,180,30, 0.8)");
$("p:last").css("background-color","rgba(80,80,30, 0.8)"); // este caso esta con la caja de luz por eso no se ve
$("li:last").css("background-color","rgba(80,80,30, 0.8)");
$("li:even").css("background-color","rgba(10,10,10, 0.8)");
$("li:odd").css("background-color","rgba(10,100,0, 0.8)");
//esta ocion input:text no funciona para elmail, pero si para pass, checkbok, radio , etc
// tambien s puede usar para obtener elementos checked, selected etc 
$("input:text").css("background-color","rgba(0,0,30, 0.8)");

*/

	
//video 16 caja de luz mostrar
/*
$(".lightbox").delay(1000).slideDown(1000).click(function(){
	$(".lightbox"). fadeOut(1000);
});

*/

//video 15 animaciones con llamados callback de funciones
/*
$(".white-box").animate({
	"margin-left" : "100px",
	"opacity" : "0",
	"margin-top" : "30px",
	"width" : "25px",
	"height" : "25px"
},2000, function(){
	$(".yellow-box").animate({
	"margin-left" : "100px",
	"opacity" : "0",
	"margin-top" : "30px",
	"width" : "25px",
	"height" : "25px"
},2000)
});

$(".black-box").fadeOut(3000, function(){
	$(".blue-box").slideToggle(3000, function(){
		$("blue-box").slideUp(3000)
	})
}).delay(9000, function(){
	$(".blue-box").fadeTo(1000,0)
});

$(".green-box, .red-box").delay(8000).fadeTo(1000,0)

*/

//------------------------------------------------------------------

//video 12 crear animaciones perzonalizadas y retrasarlas 
/*
$(".yellow-box").animate({
	"margin-left": "300px"
},2000,"linear");


$(".yellow-box , .white-box" ).animate({
	"margin-left": "0px",
	"opacity":"0",
	"width":"50px",
	"height":"25px",
	"margin-top":"35px"
},2000,"linear");

$(".blue-box").animate({
	"opacity": "0",
	"height":"0px"
},2000,"linear");

$(".red-box").animate({
	"opacity": "0",
	"width": "0px",
	"height": "0px"
},1000)

$("p").animate({
	fontSize : "+=10px",
	opacity : "0.5"
},1000);

//retrasar la funcion y extender funcionalidad
$(".green-box").delay(4000).fadeTo(1000,0);
$(".black-box").delay(5000).slideUp(1000).delay(1000).fadeIn().fadeTo(400,0.5);
*/

//_________________________________________________________________________________________
//video 10  funcion para ocultar y mostrar elementos en el DOM , restablecer 
/*
$(".green-box").slideToggle(4000);
$(".blue-box").hide(2000);
$(".blue-box").show(2000);
$(".yellow-box").toggle(4000);
$(".black-box").toggle(4000);
$(".red-box").slideUp(4000);
$(".black-box").slideDown(4000);

$("p").fadeOut(1000);
$("p").slideDown(2000);

$(".yellow-box").slideToggle  (4000);

*/

//----------------------------------------------------------------------------------------
/* video 8
  // Uncomment this line to fade out the red box on page load
   $(".red-box").fadeOut(3000);
   $(".green-box").fadeOut(3000);

   //agregando un evento sncilo a el desvanecer con JQUERY
   $(".blue-box").click(function(){
   		$(".blue-box").fadeOut(4000);
   })

   //utizando el metod aparecer despues de desvanecer
   $(".red-box").fadeIn(1000);

   //utlizando la opacidad a cierto porcentaje
   $(".red-box").fadeTo(2000,0.4);

 
   // desvanecer las cajas de izquieda a drecha al 20%,50% y 80% respectiamet
   	$(".red-box").fadeTo(1000, 0.20);
	$(".green-box").fadeTo(2000, 0.50);
	$(".blue-box").fadeTo(3000, 0.80);

 // interruptor que desvanece el selctor selecionado y si se usa dos veces o velve a apaecer y tma la opacida anterior
 	$(".red-box").fadeToggle();
 	$(".red-box").fadeToggle();
	$(".green-box").fadeToggle();
	$(".green-box").fadeToggle();
	$(".blue-box").fadeToggle();
	$(".blue-box").fadeToggle();
 */ 
});


