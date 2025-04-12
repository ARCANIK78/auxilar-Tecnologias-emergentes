const express = require('express');
const mongoose = require('mongoose');

const user = require('./user.handler')


const app = express()
const port = 3000
app.use(express.json())

mongoose.connect('mongodb+srv://Arcanik78:Kcrt8cPPGzlOGkme@cluster0.pdekcuc.mongodb.net/api-db?retryWrites=true&w=majority&appName=Cluster0')


app.get('/api/', user.list)
app.post('/api/',user.create)
app.get('/api/:id',user.get)
app.put('/api/:id',user.update)
app.delete('/api/:id',user.delete)

 app.listen(port, ()=>{
    console.log(`EL ejemplo se esta ejecutando en el puerto ${port}`)
    console.log('Run in: http://Localhost:3000/api')
 })
