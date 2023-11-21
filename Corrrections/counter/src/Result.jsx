import './App.css'
import {  useSelector } from 'react-redux'

function Result() {
 const { count } = useSelector(state => state.counter);

  return (
        <div>
            Nombre de clicks : {count}
        </div>
  )
}

export default Result
