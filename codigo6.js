var edad1 =parseInt(prompt("Ingrese la edad de uno de los hermanos."));
var edad2=parseInt(prompt("Ingrese la edad del otro hermano."));


if (edad1 > edad2){
    var cuenta= edad1-edad2;
    document.write("El hermano mayor es el primero, la diferencia de edad es de ",cuenta," años.");
}
else {
    var cuenta= edad2-edad1;
    document.write("El mayor es el segundo, la diferencia es de ",cuenta, " años.");
}