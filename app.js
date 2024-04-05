const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.port || 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, () => console.log(`app is listening http:\\localhost:${PORT}`))