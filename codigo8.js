var ladoa=parseInt(prompt("Ingrese el valor del lado a del triangulo."));
var ladob=parseInt(prompt("Ingrese el valor del lado b del triangulo."));
var ladoc=parseInt(prompt("Ingrese el valor del tercer lado del triangulo."));

if (ladoa===ladob && ladob===ladoc){
    document.write("El triangulo es Equilatero.");
}
else if (ladoa===ladob || ladoa===ladoc || ladob===ladoc){
    document.write("El triangulo es Isoceles.");
}
else{
    document.write("El triangulo es Escaleno.");
}