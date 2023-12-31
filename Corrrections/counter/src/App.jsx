import './App.css'
import About from './About'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, decrementSimple, incrementAlea, setStep} from './store/counter'
import Result from './Result';
import { useState } from 'react';
import FormStep from './FormStep';
 
function App() {
  // envoyer les actions qui se déclencheront dans le reducers
  const dispatch = useDispatch();
  // lire les donnnées dans le store dans un des createSlice 
  const { num, step, message } = useSelector(state => state.counter )


  // console.log(num)

  /**
   * On déclenche le counter du createSlice en faisant increment(7) où 7 c'est le step le payload
   */

  return (
    <>
      <div>
        App 
        <FormStep />
      </div>
      { message && (
        <p className="alert">{message}</p>
      ) }
      <h1>Vite + React</h1>
      <p>Le step est : {step} </p>
      <div className="card">
        <button onClick={() => dispatch(increment(step))}>
          increment + {step}
        </button>
        <button onClick={() => dispatch(incrementAlea())}>
          Increment alea
        </button>
      </div>
      <div className="card">
        <button  onClick={() => dispatch(decrementSimple())}>
          Decrement simple
        </button>
        <button  onClick={() => dispatch(decrement())}>
          Decrement with {step} 
        </button>
       
      </div>
      {/* <About count={num} action={ () => dispatch(increment(70) ) } />
      <Result /> */}
    </>
  )
}

export default App
