// var request = require('request');

// var url = 'https://swapi.co/api/people/2'

// console.log("1")
// var name 
// request.get(url,function(error,status,response){
//     response = JSON.parse(response);
//     name = response.name
//     console.log("dentro " + name)
// })



var request = require('request');

var url = 'https://swapi.co/api/people/1'
var url2 = 'https://swapi.co/api/films/2/'

function promesa(){
    return new Promise(function(resolve,reject){
        request.get(url,function(error,status,response){
            if(status.statusCode == 200){
                resolve(JSON.parse(response))
            }else{
                reject("error")
            }
        });
    });
}

function promesa2(){
    return new Promise(function(resolve,reject){
        request.get(url2,function(error,status,response){
            if(status.statusCode == 200){
                resolve(JSON.parse(response))
            }else{
                reject("error")
            }
        });
    });
}s

promesa().then(function(body){
    console.log("Nombre")
    console.log(body.name)
}).catch(function(error){
    console.log(error)
})

promesa2().then(function(body){
    console.log("Titulo")
    console.log(body.title)
}).catch(function(error){
    console.log(error)
})

var promesa = 0
for (var i = 0; i < 10; i++){
    

}

