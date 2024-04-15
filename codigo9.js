var hijos=prompt("Tiene hijos? (ingrese si o no).");
var sueldo=parseInt(prompt("Ingrese su sueldo en pesos."));

if (hijos==="si" || hijos==="Si"){
    let porcentaje=sueldo*1.25;
    document.write("Su préstamo puede ser de hasta ",porcentaje," pesos.");
}else{
    let porcentaje=sueldo*1.50;
    document.write("Su préstamo puede ser de hasta ",porcentaje," pesos.");
}