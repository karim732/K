const express = require('express');

const app = express()



app.get('/',(req, res,next) =>{
    res.send('hello')
})

app.listen(8080)