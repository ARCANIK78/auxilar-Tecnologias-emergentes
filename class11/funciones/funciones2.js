 function sumar(...args){
    let contador = 0;
    for(let x = 0; x < args.length; x++){
        contador= contador + args[x];
    }
    console.log(contador);
 }
 sumar(40,50,70,82,90) 