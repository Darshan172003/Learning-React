import UserContextProvider from '../context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className="text-5xl font-semibold text-violet-600 text-center">useContext</h1>
    </UserContextProvider>

  )
}

export default App
