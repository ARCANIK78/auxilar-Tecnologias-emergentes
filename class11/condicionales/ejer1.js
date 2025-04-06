let descuento_1 = 0.10;
let descuento_2 = 0.20;
let descuento_3 = 0.30;
let impuesto = 0.19;
let valor = 250;
if(valor > 100){
    if(valor > 200){
        dato = valor * descuento_3
    }else{
        dato = valor * descuento_2;
    }
}else{
    dato = valor * descuento_1;
}
valor = valor - dato
impuesto_1 = valor * impuesto;
console.log("Monto del descuento: ",valor)
console.log("Imppuesto: ", impuesto_1)
console.log("Importe a pagar: ", valor + impuesto_1)
