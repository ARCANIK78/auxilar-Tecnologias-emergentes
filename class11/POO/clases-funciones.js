//Esto es una clase y se tinee que instanciar y es antigua de crear clases.
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`${this.nombre} ${this.edad}`);
    }
}
const p1 = new Persona("Luis",12);
const p2 = new Persona("Jose",26);
console.log(p1.nombre);
console.log(p2.nombre);

p1.imprimir();
p2.imprimir();