import { useState } from 'react'

const Register = () => {
  //    const [reguser, setReguser] = useState()
  // const [regpass, setRegpass] = useState()
  // const [regcpass, setRegcpass] = useState()
  // const [regemail, setRegemail] = useState()
  // const [regname, setRegname] = useState()

  const [reguser, setReguser] = useState({
    user: '',
    pass: '',
    cpass: '',
    email: '',
    name: ''
  })

  const [regpass, setRegpass] = useState('')


  //   const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
  //     setReguser(e.target.value)




  // }

  // function register() {
  //     const n = document.getElementById('n')
  //     const e = document.getElementById('e')
  //     const un = document.getElementById('un')
  //     const ps = document.getElementById('ps')
  //     const cps = document.getElementById('cps')
  //     setReguser(JSON.stringify(un.value))
  //     setRegpass(JSON.stringify(ps.value))
  //     setRegemail(JSON.stringify(e.value))
  //     setRegname(JSON.stringify(n.value)) 
  //     setRegcpass(JSON.stringify(cps.value))
  //     if (ps.value !== cps.value) {
  //       alert('Password and confirm password do not match')
  //     }
  //   }

  function register() {
    setRegpass(JSON.stringify(reguser))
  
  }



  function reset1() {
    const n = document.getElementById('n')
    const e = document.getElementById('e')
    const un = document.getElementById('un')
    const ps = document.getElementById('ps')
    const cps = document.getElementById('cps')
    n.value = ''
    e.value = ''
    un.value = ''
    ps.value = ''
    cps.value = ''
    setReguser('')
    setRegpass('')
    setRegemail('')
    setRegname('')
    setRegcpass('')
  }

  function handleChange(e) {
    setReguser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  
  


  return (
    <div>

      <h1>Register form</h1>
      <p>Name: {reguser.name}  </p>
      <p>Email:{reguser.email}   </p>
      <p>Username: {reguser.user}  </p>
      <p>Password: {reguser.pass}  </p>
      <p>Confirm Password:{reguser.cpass}  </p>






      <form>
        NAME:<input onChange={handleChange} name="name" type='text' id='n' placeholder="Enter your name" />
        Email: <input onChange={handleChange} name='email' type='text' id='e' placeholder="Enter your email" />
        Username:<input onChange={handleChange} name='user' type='text' id='un' placeholder="Username" />
        Password:<input onChange={handleChange} name='pass' type='password' id='ps' placeholder="Enter your password" />
        confirm Password:<input onChange={handleChange} name='cpass' type='password' id='cps' placeholder="Confirm your password" />

        <button onClick={reset1} type="button">Reset</button>
        <button onClick={register} type="button">Register</button>
        <p> {regpass}</p>

      </form>


    </div>
  )

}

export default Register