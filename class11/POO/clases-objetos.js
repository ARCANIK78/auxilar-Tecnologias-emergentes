class Persona{
    
    otro;
    
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(this.nombre, this.edad);       
    }
}
const p1 = new Persona("Alex",12);
p1.imprimir();
p1.nombre = "Juanito";
p1.edad = 25;
p1.imprimir();
