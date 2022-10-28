const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

//shortcut var to mongoose.connection obj
const db = mongoose.connection

db.on('connected', function(err) {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}: ${db.port}`)
    if (err) {
        console.log(err)
    }
}) 