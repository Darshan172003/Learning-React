import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0) // useState hook to manage state in functional component 

  // let counter =  0

  const addValue = () => {
      if (counter < 20){
        setcounter(counter + 1)
      }
  }
  const removeValue = () => {
    if (counter > 0 ){
      setcounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value: {counter}</h2> 

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
