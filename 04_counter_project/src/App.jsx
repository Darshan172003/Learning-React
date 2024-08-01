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
      <h1 className='py-2 font-serif'>Learning React</h1>
      <h2 className='py-2 font-serif'>Counter Value: {counter}</h2> 

      <button onClick={addValue} className='rounded-2xl my-1'>Add Value</button>
      <br />
      <button onClick={removeValue} className='rounded-2xl my-1'>Remove Value</button>
    </>
  ) 
}

export default App
