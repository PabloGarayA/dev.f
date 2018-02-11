// function: 

function suma(x,y){
    var sumaTotal = x + y 
    console.log(sumaTotal)
}

var suma2 = function(x,y){
    var sumaTotal = x + y 
    console.log(sumaTotal)
}

var suma3 = ( x , y) => {
    var sumaTotal = x + y 
    console.log(sumaTotal)
}

suma (3,5)
suma2(3,5)
suma3(5,8)



// arrow funcion
// var sum = (n1, n2)  => n1 + n2;


/// problema1
var str = "How are you doing today?";
var res = str.split(" ");

var str2 = "Hello world!";
var res = str.slice(1, 5);

var res = "OLA"
//toUpperCase
console.log(res.toLowerCase())

 //// RESULTAD0
var problema1 = (str , str2) => {
    var resultado = str + str2 
    console.log (resultado)
}

problema1 ("hola", ":)")


/// problema2

var x = 3
var y = 4

console.log(x>=y)

//x = x + 3
console.log(x)

x+=3
//x-=3
//x*=3


console.log(x)

/////RESULTADO 2


var problema2 = (x , y) => {
    var letras = x + y 
    console.log (letras)
}

problema1 ( x + y )



// Problema 3


//Acumulador
x = 0
for (var i = 0; i<5; i++){
	x = x + i
	
}
console.log(x)

var x = prompt("Ingresa el valor")
console.log(x)

// RESULTADO 3

var problema3 = () => {
    var forEjemplo = x 
    console.log ("We did it!!!")
}

problema3 ( x )


//Acumulador
x = 0
for (var i = 0; i<5; i++){
	x = x + i
	
}
console.log(x)



// RESULTADO 3

var problema3 = () => {
    var forEjemplo = x 
    console.log ("We did it!!!")
}

problema3 ( x )

//Problema4
fibo = 1, 
fibo2 = 1, 
resultado=0; 
 
for(i = 0; i < 10; i++) { 
    fibo = fibo + fibo2; 
    fibo2 = fibo - fibo2; 
    console.log(resultado+= ' | ' + fibo); 
    } 

// RESULTADO 4


var problema4 = (fibo) =>{
    console.log ("Si salio XD " + fibo)
}

problema4("este fibo")



