var animal = require('./Animal')

class marino extends animal.Animal{
	constructor(nada,nombre){
        super (nombre)
	this.nada = nada
        this.nombre = nombre
	}

	getNada(){
        return this.nada
	}

	setNada(newNada){
		this.nada
    }
    
    getNombre(){
        return this.nombre
	}

	setNombre(newNombre){
		this.nombre
	}

	nadar(){
		return `el ${this.nombre}  ${this.nada} en el agua... apoco :P`
	}
}

