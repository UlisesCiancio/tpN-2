var cantidadlapices;
var cuenta;

var cantidadlapices=parseInt(prompt("Ingrese la cantidad de lapices que va a comprar."));

if (cantidadlapices > 1000){
    var cuenta=cantidadlapices*1.5;
    document.write("Usted debe pagar ",cuenta," pesos por su compra.");
}
else {
    var cuenta= cantidadlapices*1;
    document.write("Usted debe pagar ",cuenta," pesos por su compra.");
}