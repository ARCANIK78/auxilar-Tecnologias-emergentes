function  suma(n1, n2){
    return n1 + n2;

}

console.log(suma(50, 50))

function saludar(nombre){
    let saludito;
    if(nombre == "Bad Bonny"){

        saludito = `${nombre} Que nombre mas marica`;
        
    }else{
        saludito = `${nombre}, Master, Maquina, Leyenda del Rock Bienvenido`;
    }
    console.log(saludito);

}
saludar("Bad Bonny")
saludar("Jose")
saludar("Luis")
saludar("Bad Bonny")