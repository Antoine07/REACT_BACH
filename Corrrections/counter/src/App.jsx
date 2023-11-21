import './App.css'
import About from './About'
import { useDispatch, useSelector } from 'react-redux'
import {increment} from './store/counter'
import Result from './Result';
 
function App() {
  // envoyer les actions qui se déclencheront dans le reducers
  const dispatch = useDispatch();
  // lire les donnnées dans le store dans un des createSlice 
  const { num, step } = useSelector(state => state.counter )

  // console.log(num)

  /**
   * On déclenche le counter du createSlice en faisant increment(7) où 7 c'est le step le payload
   */

  return (
    <>
      <div>
        App 
      </div>
      <h1>Vite + React</h1>
      <p>Le step est : {step} </p>
      <div className="card">
        <button onClick={() => dispatch(increment(7))}>
          count is {num}
        </button>
      </div>
      <About count={num} action={ () => dispatch(increment(70) ) } />
      <Result />
    </>
  )
}

export default App
