var unidades=parseInt(prompt("Ingrese las unidades creadas por día."));
var cuenta = unidades*6;


if (cuenta >= 100){
let sueldo=cuenta*15;
let aumento=sueldo*1.10;
document.write("Usted a vendido 100 o más unidades al valor de 15$ <br> M  ás el aumento del 10% usted recibirá un sueldo de", aumento," pesos.");
}
else{
    let sueldo=cuenta*15;
    document.write("Usted no a llegado a la venta de 100 unidades. <br> Su sueldo sin aumento es de ", sueldo," pesos.");
}