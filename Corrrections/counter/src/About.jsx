import './App.css'

function About({count, action}) {

  return (
    <>
      <div>
        Hello About
      </div>
        <p>Count : {count} </p>
        <p><button onClick={action}>Action + 1</button></p>
    </>
  )
}

export default About
