import './App.css'
import About from './About'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, decrementSimple, incrementAlea} from './store/counter'
import Result from './Result';
 
function App() {
  // envoyer les actions qui se déclencheront dans le reducers
  const dispatch = useDispatch();
  // lire les donnnées dans le store dans un des createSlice 
  const { num, step, message } = useSelector(state => state.counter )

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e)
  }

  const handleStep = (e) => {

    // TODO avec le createSlice 

  }

  // console.log(num)

  /**
   * On déclenche le counter du createSlice en faisant increment(7) où 7 c'est le step le payload
   */

  return (
    <>
      <div>
        App 
        <form onSubmit={handleSubmit}>
          <p>Step to increment : <input type="text" onChange={handleStep}/></p>
          <button type="submit">Ok</button>
        </form>
      </div>
      { message && (
        <p className="alert">{message}</p>
      ) }
      <h1>Vite + React</h1>
      <p>Le step est : {step} </p>
      <div className="card">
        <button onClick={() => dispatch(increment(7))}>
          count + 7 {num}
        </button>
        <button disabled={num <= 0} onClick={() => dispatch(decrementSimple())}>
          Decrement simple
        </button>
        <button disabled={step > num} onClick={() => dispatch(decrement())}>
          Decrement with step 
        </button>
        <button onClick={() => dispatch(incrementAlea())}>
          Increment alea
        </button>
      </div>
      <About count={num} action={ () => dispatch(increment(70) ) } />
      <Result />
    </>
  )
}

export default App
