const express = require('express')
const mongoose = require('mongoose')

const route = require('./routes/route')

const app = new express()
require('dot-env')

app.use(express.urlencoded({extended : true}))
app.use(route)


// db
const uri = `mongodb+srv://ahnaf:{PW}@cluster0.hfyejbq.mongodb.net/allStudent?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useUnifiedTopology : true 
});

// Cek koneksi
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection Error : "))
db.once('open', () => console.log('Connection succesly'))


app.listen(3000, console.log('server is running'))
