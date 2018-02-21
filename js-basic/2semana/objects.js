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

var animal = new Animal("Animal", 35)
console.log (animal.comer(" pescado"))

