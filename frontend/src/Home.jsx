import { use, useEffect, useState } from "react"
import axios from 'axios';

import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs"




function Home() {

    {/* Here we are defining the state variable task to store the input value and handleAdd function to add the task to the database */}
     const [task, setTask] = useState("")
     {/* Here we are defining the handleAdd function to add the task to the database using axios post request */}
    const handleAdd = () =>{
        axios.post('http://localhost:3001/add', {task : task})
         .then(result => location.reload())
         .catch(err => console.log(err))
    }
    
    {/* Here we are defining the state variable todos to store the tasks fetched from the database and useEffect to fetch the tasks when the component is mounted */}
    const [todos, setTodos] = useState([])

    {/* Here we are using useEffect to fetch the tasks from the database using axios get request and storing it in the todos state variable */}
    useEffect(() => {
      axios.get('http://localhost:3001/get')
       .then(result => setTodos(result.data))
       .catch(err => console.log(err))

   }, [])

   {/* Here we are defining the handleEdit function to update the done field of the task to true when we click on the circle icon using axios put request */}
   const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/'+id)
     .then(result => location.reload())
     .catch(err => console.log(err))

   }

   {/* Here we are defining the handleDelete function to delete the task from the database when we click on the trash icon using axios delete request */}
    const handleDelete = (id) => {      
        axios.delete('http://localhost:3001/delete/'+id)
         .then(result => location.reload())
         .catch(err => console.log(err))
    }


  return  <div className="Home">

    <h1>Todo List</h1>  <br/>
     
     {/* Here we are creating an input box to enter the task and a button to add the task to the database */}
    <div className="Input">
    <input type="text"  id="input" placeholder='Enter your input' onChange={(e) => {  
          setTask(e.target.value)
    }}/>
    <button type="button" id="btn" onClick={handleAdd}>Add </button>
    </div>
    
    <br/><br/>
    
    {/* Here we are checking if there are no tasks in the database then we are displaying No Record otherwise we are displaying the tasks in the database using map function */}

    {/* And then we are mapping the todos array to display the tasks in the database and also adding the functionality to update and delete the tasks using the icons */}
     
      {
         todos.length === 0 ?
         <div><h3>No Record</h3></div> : 
         todos.map(todo => (
         <div className="Todo" >

            <div className="checkbox">
            {todo.done ? <BsFillCheckCircleFill className="icon" /> : 
             <BsCircleFill className="icon" onClick={() => handleEdit(todo._id)}/>
            }
            </div>

            <p className = {todo.done ? "LineThrough" : ""}>{todo.task}</p>


            <BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)}/>

         </div>
       ))
      }

    </div>
  
}

export default Home
