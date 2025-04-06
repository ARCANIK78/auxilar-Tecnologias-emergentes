let arrayunico = [1,2,3,4,5,6,7,8,9];
let pares = [];
let inpar = [];
for(let x=0; x< arrayunico.length; x++){
    aleatorio = Math.floor(Math.random()*100)
    operacion = arrayunico[x] * aleatorio;
    if(operacion % 2 == 0){
        pares.push(operacion)
    }else{
        inpar.push(operacion)
    }
}
console.log("Pares")
for(let j of pares){
    console.log(j)
}
console.log("Inpar")
for(let j of inpar){
    console.log(j)
}