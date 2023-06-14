const DB_MONGO = process.env.DB_MONGO

const mongoose = require("mongoose")
const { db } = require("../models/booksModel")

const connect = async () => {
    try {
        mongoose.connect( DB_MONGO,
            
            {useNewUrlParser: true, 
                useUnifiedTopology: true
            }
            )
            console.log("Database connected")
    }catch (error) {
        console.log("error")
    }
}

module.exports = connect