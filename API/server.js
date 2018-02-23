const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require ('./mongoclient');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// A ESTO SE LE LLAMAN "endpoints"
app.get('/',(req,res) =>{
    res.send('Hola Mundo')
})


app.get('/suma/:numero1/:numero2',(req,res) =>{
    var name = req.params.uidd
    var num1
    var num2

    var result = num1 + num2
    res.send(`hola ${result}`)
}) 


app.get('/saludo/:uidd',(req,res) =>{
    var name = req.params.uidd
    res.send(`hola ${name}`)
}) 

app.get('/prueba',(req,res) =>{
    var query = req.query.search
    var city = req.query.city
    res.send(`Buscaste ${query} ${city}`)
}) 

app.post('/prueba',(req,res) =>{
    var body = req.body
    res.status(201).send(body)
}) 

app.post ('/create/Student',(req,res) =>{
    const {name,age, program} = req.body
    MongoClient.saveStudent(name,age,program).then(function(student){
        res.send({student})
    })
})


app.listen(3000,() => console.log ('Server encendido'))


