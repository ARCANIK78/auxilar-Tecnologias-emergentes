class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    detallesPersona(){
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}`);
    }
}
p1 = new Persona("Juan", 12);

class Empleado extends Persona{
    sueldo;
    constructor(nombre, edad, sueldo){
        super(nombre, edad),
        this.sueldo = sueldo
    }
    detallesPersona(){
        super.detallesPersona();
        console.log("Sueldo: ", this.sueldo);
    }

}
const em1 = new Empleado("Roel" , 23 , 1000);
console.log(em1);
em1.detallesPersona();


