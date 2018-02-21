var animal = require('./Animal')
var terrestre = require('./terrestre')
var marino = require('./marino')
var volador = require('./volador')

console.log(terrestre)

var lizard = new terrestre.Terrestre(45,4, "lagarton")
console.log(lizard.correr())



var pajaro = new pajaro.volador("Buho", 10)
console.log(pajaro.volar())

var list = [pug]
function jaulasTerrestres(listaDeAnimales){
    var listTerrestres = []
    for (var i = 0;  i < listaDeAnimales.l; i++){
        if (animal.raza == 'terrestre'){
            listTerrestres.push(animal)
        }
    }

    return listTerrestres
}

jaulasTerrestres (list)


