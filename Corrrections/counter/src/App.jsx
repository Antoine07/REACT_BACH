import { useState } from 'react'

import './App.css'
import About from './About'
import {increment} from './store/counter'

function App() {
  const [count, setCount] = useState(0)

  increment(7)

  /**
   * On déclenche le counter du createSlice en faisant increment(7) où 7 c'est le step le payload
   */

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
    </>
  )
}

export default App
