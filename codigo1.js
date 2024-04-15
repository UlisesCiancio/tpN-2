var numero;

var numero=parseInt(prompt("Ingrese un número (puede ser negativo o positivo)."));

if (numero >0){
    document.write("El número ingresado es positivo.");
}
else if(numero<0){
    document.write("El número ingresado es negativo.");
}
else {
    document.write("El numero ingresado es cero.");
}