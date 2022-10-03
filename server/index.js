const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const users = {}

io.on('connection', socket =>
{
    socket.on('message', ({ name, message }) =>
    {
        io.emit('message', { name, message })
    })
    socket.on('new-user', name =>
    {
        console.log("name", name)
        io.emit('user-connected', name)
    })
})

http.listen(4000, function ()
{
    console.log('listening on port 4000')
})
