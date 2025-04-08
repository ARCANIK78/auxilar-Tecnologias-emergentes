let palabra = "osooso";
const cadena = palabra.split('');
let reversa = [...cadena].reverse()
let siono = " ";
for(let x = 0; x < cadena.length ;x++){
    if(cadena[x] != reversa[x]){
        siono = "No es palindromo";
        break;
    }else{
        console.log("test", x);
        siono = "Si es palindromo";
    }
}
console.log(siono);