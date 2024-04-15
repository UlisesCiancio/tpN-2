var numero1=parseInt(prompt("Ingrese uno de tres números."));
var numero2=parseInt(prompt("Ingrease dos de tres números."));
var numero3=parseInt(prompt("Ingrese el último número."));

if (numero1 > numero2 && numero2 > numero3){
    document.write(numero1," Es mayor que ",numero2," y que ",numero3);
}
else if (numero2 > numero3 && numero3 >numero1){
    document.write(numero2," Es mayor que ", numero1, " y que ", numero3);
}
else {
    document.write( numero3," Es mayor que ", numero1, " y que ", numero2);
}