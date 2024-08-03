
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-1 font-serif mb-2'>Tailwind and Props</h1>
      <Card Username="User1" btnText="Show Profile"/>
      <Card Username="User2" btnText="visit Profile"/>
      
    </>
  )
}

export default App
