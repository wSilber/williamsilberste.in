require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(PORT, () => console.log(`Starting server on port ${PORT}`))