import './App.css'
import { useDispatch } from 'react-redux'
import { setStep } from './store/counter';
import { useState } from 'react';

function FormStep() {
  const dispatch = useDispatch();
  const [newStep, setNewStep] = useState('') ;

  // traiter le submit
  const handleSubmit = (e) =>{
    e.preventDefault(); 
    // vérifie que le champ n'est pas vide et que c'est un nombre entier
    if(newStep && parseInt(newStep) == newStep ){
      dispatch( setStep(parseInt(newStep)) ) ; // envoyer la valeur dans Redux <=> dispatch une action 
      setNewStep(''); // state local au composant
    }
  }

  // controler le changement dans l'input géré avec un state local au composant (pas de redux)
  const handleStep = (e) => {
    const newStep = e.target.value; // récupère la valeur de l'input
    setNewStep(newStep); // useState classique
  }

  return (
    <form onSubmit={handleSubmit}>
          <p>
            Change step : <input type="text" onChange={handleStep} value={newStep} />
            <br /> debug : {newStep}
          </p>
          <button type="submit">Ok</button>
    </form>
  )
}

export default FormStep
