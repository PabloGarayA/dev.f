var animal = require('./Animal')

class Terrestre extends animal.Animal{
	constructor(corre, camina, nombre){
        super (nombre)
        this.corre = corre
        this.camina = camina
        this.nombre = nombre
	}

	getCorre(){
        return this.corre
	}

	setCorre(newCorre){
		this.corre
    }
    
    getCamina(){
        return this.camina
	}

	setCamina(newCamina){
		this.camina
    }
    
    getNombre(){
        return this.nombre
	}

	setNombre(newNombre){
		this.nombre
	}

	correr(){
        return `el ${this.nombre} corre a ${this.corre} y tiene ${this.camina} patas`
        
	}
}

module.exports.Terrestre = Terrestre

