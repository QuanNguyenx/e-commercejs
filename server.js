const app = require("./src/app");

const PORT = process.env.PORT | 3030

const server = app.listen(PORT, () => {
    console.log('Hiiii my name is Hong Quan, port:', PORT)
})

process.on('SIGINT', () => {
    server.close( () => console.log('server shutting down ....'))
})