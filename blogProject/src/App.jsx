import React from 'react'

function App() {
  
  const env = import.meta.env.VITE_APPWRITE_URL

  return (
    <div>
      <h1>Blog Project {env}</h1>
    </div>
  )
}

export default App