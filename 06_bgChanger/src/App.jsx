import { useState } from 'react'


function App() {

  const [color, setcolor] = useState('black')

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed bottom-0 inset-x-0 flex justify-center p-4">
          <div className='flex flex-wrap justify-center px-4 py-2 rounded-3xl gap-4 bg-gray-300 shadow-lg '>
            <button onClick={() => setcolor('red')}
              className='px-4 py-1 rounded-2xl bg-red-600'>
              Red
            </button>
            <button onClick={() => setcolor('green')}
              className='px-4 py-1 rounded-2xl bg-green-600'>
              Green
            </button>
            <button onClick={() => setcolor('Blue')}
              className='px-4 py-1 rounded-2xl bg-blue-600'>
              Blue
            </button>
            <button onClick={() => setcolor('Yellow')}
              className='px-4 py-1 rounded-2xl bg-yellow-500'>
              Yellow
            </button>
            <button onClick={() => setcolor('purple')}
              className='px-4 py-1 rounded-2xl bg-purple-600'>
              Purple
            </button>
            <button onClick={() => setcolor('orange')}
              className='px-4 py-1 rounded-2xl bg-orange-500'>
              Orange
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
