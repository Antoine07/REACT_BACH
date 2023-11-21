import './App.css'
import { useDispatch } from 'react-redux'
import { increment } from './store/counter';

function About({count, action}) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        Hello About
      </div>
        <p>Count : {count} </p>
        <p><button onClick={action}>Action </button></p>

        <h2>Un dispatch depuis le composant About</h2>
        <p><button onClick={() => dispatch(increment(1000))}>+ increment de 1000 </button></p>

    </>
  )
}

export default About
