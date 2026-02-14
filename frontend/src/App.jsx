import { useState } from 'react'
import './App.css'
import Home from "./Home"


function App() {

  const [todos, setTodos] = useState([])


  return (<>
    <div class="Body">


      <Home/>
      

    </div>
    </>
  )
}


export default App
