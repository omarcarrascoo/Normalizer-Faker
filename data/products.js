// const { faker } = require('@faker-js/faker');
import { writeFile } from 'fs/promises'
import {faker} from '@faker-js/faker'

faker.locale = 'es'
const {commerce, image} = faker

let str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n'

for (let i = 0; i < 20; i++) {
    str += `${commerce.productName()};${commerce.price()};${commerce.productAdjective()};${commerce.department()};${image.food()}\n`
}

writeFile('personas.csv', str)
    .then(() => console.log('Archivo creado'))
    .catch(err => console.error)


