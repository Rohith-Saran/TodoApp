const mongoose = require('mongoose')

// Defining Schema
const TodoSchema = new mongoose.Schema({
    task : String,
    done : {
        type: Boolean,
        default: false
    }

})

// Creating a model ( it is a table in mongodb model)
const TodoModel = mongoose.model("todos", TodoSchema)

// Exporting the model to use it in other files
module.exports = TodoModel

