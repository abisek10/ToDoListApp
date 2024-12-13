import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { countContext } from './contexts/context'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    return setCount(count + 1)
  }

  return (
    <>
    <countContext.Provider value={{count, increase}}>
      <Navbar/>
    </countContext.Provider>
    </>
  )
}

export default App
