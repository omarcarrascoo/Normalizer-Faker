import express from 'express'
import {Server as HttpServer} from "http"
import {Server as IOServer} from 'socket.io'
import normalizr from 'normalizr'
import { Msj } from './data/Msj.js'
import util from 'util'


const { schema, normalize, denormalize } = normalizr
const app = express()
const httpServer = new HttpServer (app)
const io = new IOServer (httpServer)
const port = 2003
const originalData = Msj

app.use(express.static('public'))




function print(objeto) {
    console.log(util.inspect(objeto,true,12,true))
}


const user = new schema.Entity('users')
const article = new schema.Entity('comments',{
    author: user
})

console.log(' - ------------------------  objeto normalizado back ------------------------ - ')

// normalizando el objeto original

const nomalizeOriginalData = normalize(originalData, article)
console.log(JSON.stringify(nomalizeOriginalData).length)
// print(nomalizeOriginalData)
console.log(nomalizeOriginalData);

httpServer.listen(port,()=>{
    console.log('Server listen on port ' + port)
})

io.on('connection', (cliente)=>{
    console.log('Un cliente se conecto');
    cliente.emit('mensajes', nomalizeOriginalData)
    cliente.on('new-message', mensaje =>{
        console.log(originalData)
        originalData.push(mensaje)
        io.sockets.emit('mensajes', originalData)
    })
})