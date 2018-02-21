URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1"
var request = require('request');
URI = "/authors/"
URL = URL_BASE + URI
	json_send = {
		"name": "Pablo",
		"last_name": "Garay",
		"nacionalidad": "MX",
		"biography": "jsdkkasnm<d",
		"gender": "M",
        "age": 12,
        "it's alive": false
	}
function post(){
    return new Promise(function(resolve,reject){
        request.post({url:URL, form: json_send},function(err,httpResponse,body){
            console.log(body)
        })
    })
}

function patch(){
    return new Promise(function(resolve,reject){
        request.patch(url,function(error,status,response){
            if(status.statusCode == 201){
                resolve(JSON.parse(body))
            }else{
                reject("error")
            }
        });
    });
}


promesa().then(function(body){
    console.log("false")
    console.log(body.name)
}).catch(function(error){
    console.log(error)
})

promesaPatch().then(function(body){
    console.log("")
    console.log(body.name)
}).catch(function(error){
    console.log(error)
})