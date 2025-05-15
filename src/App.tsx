import { useState } from 'react'
import Login from './login'
import Register from './register'

import './App.css'



function App() {
  const [send, setSend] = useState('')
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState('ketan')

  // const handleClick = () => {
  //   if (count >= 5) {
  //     return;
  //   }
  //   setCount((count) => count + 1)



  // }


  // const handleChange = (e: { target: { value: SetStateAction<string> } }) => {

  //   setName(e.target.value)


  // }



  // const handleClick1 = (e: {target: { value: SetStateAction<string> } }) => {
  //   setPassword(e.target.value)

  // }
  return (
    <>
      {/* <div>
      
      </div>
     
      <div className="card">
        <button onClick={handleClick}>
          count is {count}

        </button>
     
      </div>
    


      <p>Name is : {name}</p>
      <input style={{ width: '200px', height: '30px', borderRadius: '5px', border: '1px solid black' }}
        onChange={handleChange}

        type="text" placeholder="Enter your name" /> */}



      <div>
        <p>{send}</p>
        <Login send={setSend} />
        <Register


        />
      </div>
    </>
  )
}



export default App
