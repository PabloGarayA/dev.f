var objeto  = {}

var jetta = {
    motor: "V4",
    ruedas: 4,
    marca: "Nissan",
    acelerar: function(){
        console.log (this.motor)
        return "Arranca"
    }
}

function Auto (marca,modelo,annio){
    this.marca = marca
    this.modelo = modelo
    this.annio = annio

    var arrancar = function(){
        return "Arrancar el + marca "
    }
    this.arrancar = arrancar
}

var jetta = new Auto ("Nissan" , "Jetta",  2010)
console.log (jetta.arrancar())


console.log (carro.acelerar())





var factura = {
    subTotal : 100 ,
    IVA: 16 ,
    total : function() {
        console.log (this.subTotal + this.IVA)
        return "Este es el total"
    }
}

console.log(factura.total())









