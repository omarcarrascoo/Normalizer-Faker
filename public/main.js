const socket = io.connect()


const render = (mensajes) => {
    const html = mensajes.map((elem, index) => {
        const name = elem.mensaje
        return (
            `<div>
                <strong>${name.author}</strong>
                <em>${elem.text}</em>
            </div>`
        )
    }).join(" ");
    document.getElementById('printMsj').innerHTML = html;
}

const addMessage = (e) => {
    const text = document.querySelector('#mnsj').value
    const email = document.querySelector('#email').value
    const surName = document.querySelector('#surName').value
    const years = document.querySelector('#years').value
    const name = document.querySelector('#name').value
    const ID = document.querySelector("ID").value
    const data = {
        author: {
            id: ID,
            name : name ,
            apellido :surName,
            edad: years,
            correo: email,
            avatar: avatar
        },
        text: text
    }
    socket.emit('new-message', data)
    return false;

}

socket.on('mensajes', (data)=>{
    console.log(data)
    render(data)
})

console.log(' - ------------------------  objeto denormalizado fornt - cdn normalize ------------------------ - ')

// denormalizando el objeto normalizado

const denormalizeOriginalData = denormalize(nomalizeOriginalData.result, article, nomalizeOriginalData.entities)

// console.log(denormalizeOriginalData)
console.log(JSON.stringify(denormalizeOriginalData).length)




