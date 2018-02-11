var animal = require('./zoo')


class Animal{
	constructor(nombre){
        this.nombre = nombre
        }
        
    getNombre(){
        return this.nombre
	}

	setNombre(newNombre){
		this.nombre
    }

}

module.exports.Animal = Animal




// class Animal{
// 	constructor(name,peso=0){
// 		this.name = name
// 		this.peso = peso
// 	}

// 	getName(){
// 		return this.name
// 	}

// 	setName(newName){
// 		this.name = newName
// 	}

// 	comer(comida){
// 		return 'El ' + this.name + ' esta comiendo ' + comida 
// 	}
// }

// module.exports.Animal = Animal
