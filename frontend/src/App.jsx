import { useState } from 'react'
import './App.css'
import Home from "./Home"


function App() {

  const [todos, setTodos] = useState([])


  return (<>
    <div className="Body">

      {/*Here we are rendering the Home component which contains the main functionality of our app */}
      <Home />

    </div>
    </>
  )
}


export default App
