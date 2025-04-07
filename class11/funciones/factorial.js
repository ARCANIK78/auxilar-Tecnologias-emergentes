function factorial(n){
    console.log("Imprimimos",n);
    if(n > 1){
       n =  n * factorial(n - 1)
        console.log("Operamos ",n);
    }
    return n;
}
console.log(factorial(5))
