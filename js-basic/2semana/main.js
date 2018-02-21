'use strict'


for (var i = 1; i <=100; i++ ){
    if ( i % 3 == 0)
    console.log ("fizz");
else if ( i % 5 == 0)
    console.log ("buzz");
else if ( i % 3 == 0 && i % 5 == 0 )
    console.log ( "fizzbuzz");
}



/*



var str = "hola"

var num = 10;
// ESTO es lo mismo a
num > 20 ? console.log ( "mayor") : num == 10?  console.log ( "diez") : console.log("XD")

// esto
if (num > 20) {
    console.log ( "mayor")
} else if (num == 10) {
    console.log ("diez")
}else{
    console.log ("XD")
}


//switch
var luna = "llena"

switch (luna){
    case "llena": {
        console.log( "luna llena");
        break;
    }
    case "nueva": {
        console.log( "luna llena");
        break;
    }
    dafault: {
        console.log( "nublado");
        break;
    }
}

//for
var i = 0;

for ( i in str){
    console.log(str[i])
}

// while

while( num <10){
console.log (num);
num++
}

do{

}






/*var num = 0;
var str = "hola";
var bool = true;
var obj = {};
var arr = [];
var und = undefined;
var notNumer= NaN;

if (num == 0){
    console.log ( "XD")
} else if(num == 5){
    console.log ("no")
} else{
    console.log (":)")
}

// si la variable existe () se evalua "true", si no existe o es 0 se evalua "false"
// 'use strict' : sirve para usar solo buenas practicas



arr = [23,{hola: "hey"}]
console.log ( arr[1].hola)

str += " mundo";

obj = {
    nombre: "Pablo",
    apellido: "Garay",
    edad: "24",
    bandaFavorita:{
        1: "rhcp",
        2: "ni idea"
    }
}

console.log(obj.bandaFavorita[1])


arr = ["hola", 88]
*/


/* Notas:

num = num + 1
num += 1


*/
&& ||


