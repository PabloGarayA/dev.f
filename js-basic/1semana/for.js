for (var i = 1; i <= 10000; i++ ){
    console.log (i)
}
// i=1 = punto partida
// 1<= 1000 punto llegada
//i++ pasos de la iteracion

for (var i = 1; i <= 10000; i++ ){
    if(i % 2 == 0){
        console.log (i)
    } 
}
var suma = 0
for ( var i = 0; 1 <= 30000; i++){
    if ((i % 2) == 0){
        suma = suma + i
    }
}

console.log(suma)



//fibonachi
x = 1
y = 1;
for ( var i = 0; i <= 100; i++){    
    x = x + y;
    y= x - y;
    console.log (x)
}



// Arrays
// push : agregas un elemento al array solo al final
//splice: asignas un valor cuando se necesitan, [asignar el valor, 0 para no borrar, que se pondra] [1,0,"bye"] 
//sort: ordena de la lista asendentemente 
//reverse: ordena desendente 
// concat : concatena los elementos del array
//indexOf: busca la pocision del array

var arreglo = ["hola","como","estas","linea", "array",1,2,3,5, "see"]
for ( var i = 0; i <= 9; i++){
    console.log(arreglo[i])
}

//strings

var valores = [ ]
for (var i = 0; i <= 100; i++){
    valores.push(i)
}
console.log(i)

var numero = 5
var tabla = [ ]
for (var i = 0; i <= 10; i++){
    tabla[i] = tabla 
}









