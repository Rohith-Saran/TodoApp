const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const TodoModel = require('./Models/Todo')

// Here we are creating an express app
const app = express()

// Here we are using cors to allow the frontend to access the backend 
// and express.json() to parse the json data from the frontend
app.use(cors())
app.use(express.json())

// Always while connecting to mongodb , write it under a try-catch block 
// Here we are connecting to the mongodb database named TodoApp
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp')


// While putting data into mongodb table use asyn function always
// Here we are adding the data to the mongodb table
app.post('/add',  (req,  res )=> {
    const task = req.body.task
     TodoModel.create({
        task:task
    })
      .then(result => res.json(result))
      .catch(err => res.json(err))


})

// Here we are fetching the data from the mongodb table and sending it to the frontend
app.get('/get', (req, res) =>{
    TodoModel.find({})
     .then(result => res.json(result))
     .catch(err => res.json(err))
})

// Here we are updating the record in the mongodb table when we click on the circle icon
app.put('/update/:id', (req, res) => {
    const {id}= req.params;
    // const id = req.params also fine
    // Here we are updating the done field to true when we click on the circle icon
    TodoModel.findByIdAndUpdate({_id: id}, {done : true})
     .then(result => res.json(result))
     .catch(err => res.json(err))
})

// Here we are deleting the record when we click on the trash icon
app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id : id})
     .then(result => res.json(result))
     .catch(err => res.json(err))
})

// Here we are starting the server on port 3001
app.listen(3001 , ()=> {
    console.log("Server is running")
})
