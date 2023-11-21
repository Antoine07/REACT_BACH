import { useState } from 'react'

import './App.css'
import About from './About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        App 
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <About count={count} action={ () => setCount((count) => count + 1) } />
      <About count={count} />
      <About count={count} />
      <About count={count} />
    </>
  )
}

export default App
