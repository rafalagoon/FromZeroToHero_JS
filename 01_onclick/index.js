function saludo ()
{
	let iva = 0.21;

	let valor = document.getElementById("texto").value;
	
	let numero = parseInt(valor);
	
	let resultado = numero + numero * iva;
	
	console.log(resultado);
}
