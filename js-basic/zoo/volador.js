var animal = require('./Animal')

class volador extends animal.Animal{
	constructor(vuela,nombre){
        super (nombre)
	this.vuela = vuela
        this.nombre = nombre
	}

	getVuela(){
        return this.vuela
	}

	setVuela(newVuela){
		this.nada
    }
    
    getNombre(){
        return this.nombre
	}

	setNombre(newNombre){
		this.nombre
	}

	volar(){
		return `el ${this.nombre} vuela a ${this.nada} de altura`
	}
}

module.exports.volador = volador

