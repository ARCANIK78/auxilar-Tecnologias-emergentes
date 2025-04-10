class Persona{
    //atributos privados
    #nombre 
    #edad
    constructor(nombre, edad){
        this.#nombre = nombre
        this.#edad = edad
        this.#metodoPrivado
    }
    set setNombre(nombre){
        this.#nombre = nombre
    }
    get getNombre(){
        return this.#nombre 
    }
    set setEdad(edad){
        this.#edad = edad
    }
    get getEdad(){
        return this.#edad
    }
    #metodoPrivado(){
        console.log("Soy metodo privado")
    }
}
const p1 = new Persona("Alex", 23);
console.log(p1.getNombre);
p1.setNombre = "Roel";
console.log(p1.getNombre)