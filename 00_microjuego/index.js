//Adivina el numerico

//1.- Instrucciones del juego
//2.- Internamente se genera el número al azar
//3.- Nos pide introducir un número
//4.- Comprobamos
//5.- Si el número es igual, pantalla ganar
//6.- Si el número es diferente
//6.1.- Es mayor
//6.2.- Es menor
//7.- Si hemos intentado 10 veces game over
//8.- Pedir otro número
//9.- Volver a 4
//10.- RECORDAR IDEA EN DIRECTO (Dificultad)

let debug = false;

let max = 100;
let intentos = 10;
let contador = 0;

alert("El juego consiste en adivinar un número. Te daremos pistas de si es mayor o menor que tu número introducido.");

let dificultad = prompt("¿Qué dificultad quieres? (0) Fácil. (1) Normal. (2) Difícil");

if (dificultad == 0) {
	intentos = 5;
	max = 10;
}
else {
	if (dificultad == 2) {
		max = 1000;
	}
}


let numero_azar = Math.floor(Math.random()*max)+1;

if (debug){
	console.log("Número al azar: "+numero_azar);
}

let pista = "";
if (dificultad == 0) {
	if (numero_azar % 2 == 0)
		pista = " (Es número par)";
	else
		pista = " (Es número impar)";
}


let numero = prompt("Introduce el número entre 1 y "+max+ ". Tienes "+intentos+" intentos."+pista);

while(contador < intentos && numero != numero_azar && numero != null) {
	contador++;
	
	let num_intentos = intentos-contador;
	let intentos_txt = "Te quedan "+num_intentos+" intentos";
	if (num_intentos == 1 ){
		intentos_txt = "Te queda 1 intento";
	}
	else {
		if (num_intentos == 0) {
			intentos_txt = "Último intento";
		}
	}
	
	if (numero > numero_azar){
		numero = prompt("Es menor que "+numero+".  "+intentos_txt);
	}
	else{
		numero = prompt("Es mayor que "+numero+". "+intentos_txt);
	}
}

if (numero == numero_azar){
	alert("¡Has acertado! ¡CHACHI!");
}

if (contador == intentos) {
	alert("Game Over. El número era "+numero_azar);
}

if (numero == null) {
	alert("Adios!!! Hasta otra!!!");
}














