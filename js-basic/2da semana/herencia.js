// herencia

class Animal{
    constructor(nombre,peso= 0){
        this.nombre = nombre
        this.peso = peso
        console.log(" se creo un animal")
    }

    getNombre(){
        return this.nombre
    }

    setNombre (newName){
        this.nombre = newName
    }

    comer(comida){
        return "El " + this.nombre + " esta comiendo" + comida
    }
}


class Perro extends Animal{
    constructor(raza,nombre,peso){
        super(nombre,peso)
        this.raza = raza
    }

    getRaza(){
        return this.raza
    }

    SetRaza(){
        this.raza = newRaza
    }

    correr(rapido){
        //return `El perro de color ${this.color} corre muy rapido`
         return "El perro " + this.raza + " corre muy" + rapido
    }
}

class Pajaro extends Animal{
    constructor(nombre){
        super(nombre)
        this.nombre = nombre
    }

    getNombre(){
        return this.nombre
    }

    SetNombre(){
        this.nombre = newNombre
    }

    volar(alto){
        return `El pajaro ${this.nombre} vuela muy `
         
    }
}


function comerComida(Animal){
    console.log (Animal.comer(" comida"))

}


 var pajaro = new Pajaro("woodkeeper")
// console.log (pajaro.comer(" un chingo "))
comerComida (pajaro)



