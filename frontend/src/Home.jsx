import { useState } from "react"
function Home() {

  const [todos, setTodos] = useState([])
  return  <div class="Home">

    <h2>Todo List</h2>

    <input type="text" name="Enter your dea" id="input" placeholder='Enter your input'/><br/>
    <button type="button" id="btn" >Add </button>

      {
         todos.length === 0 ?
         <div><h3>No Record</h3></div> : 
         todos.map(todo => (
         <div >
            {todo}
         </div>
       ))
      }

    </div>
  
}

export default Home