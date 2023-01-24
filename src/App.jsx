import { useState } from 'react'
import './App.css'
import Ventas from './pages/Ventas'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Ventas/>
    </div>
  )
}

export default App
