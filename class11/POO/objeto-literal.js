
const persona = {
    nombre : "Alex",
    apellido: "Mamani",
    Edad : 23,
    nombreCompleto(){
        return `${this.nombre},${this.apellido}`
    },
    soyMayor(){
        if(this.Edad > 18){
            return `Eres mayor de edad`;
        }else{
            return `No eres mayor de edad`;
        }
    },
    trajer: ['traje1','traje2','traje3'],
    direccion: {
        zip: '122131232',
        pais: 'peru',
        depart: 'curso',
    }
}
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona.soyMayor());
console.log(persona.trajer);
console.log(persona.direccion.pais);