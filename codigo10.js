var monto =parseInt(prompt("Ingrese la cantidad vendida."));

if (monto<= 100 && monto>=1){
    let cuenta=monto*1.10;
    document.write("Usted recibirá una comisión de ",cuenta," pesos.");
}
else if(monto<= 500 && monto>100){
cuenta=monto*1.12;
document.write("Usted recibirá una comisión de ",cuenta," pesos.");
}
else if(monto <=1000 && monto>500){
    cuenta=monto*1.15
    document.write("Usted recibirá una comisión de ",cuenta," pesos.");
}
else if (monto>1000){
    cuenta=monto*1.20;
    document.write("Usted recibirá una comisión de ",cuenta," pesos.");
}