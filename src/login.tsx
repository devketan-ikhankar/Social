import { useState } from 'react'

const Login = ({ send }) => {
    const [username, setUsername] = useState(
        {
            user: '',
            pass: ''
        }
    )
    const [password, setPassword] = useState('')


    // const handleClick = (e: { target: { value: SetStateAction<string> } }) => {
    //     setUsername(e.target.value)

    // }
    function login() {
        setPassword(JSON.stringify(username))
        send(password)

    }

    function reset() {
        const u = document.getElementById('u')
        const p = document.getElementById('p')
        u.value = ''
        p.value = ''
        setUsername('')
        setPassword('')


    }

    function handleChange(e) {
        setUsername((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    

    return (
        <div>
            <h1>Login form</h1>
            <p>Username:  {username.user} </p>
            <p>Password:  {username.pass} </p>
            <form>
                Username:<input onChange={handleChange} type="text" id='u' name='user' placeholder="Enter your Username" />
                Password:  <input onChange={handleChange} type="password" name='pass' id='p' placeholder="Enter your password" />

                <button onClick={reset} type="button">Reset</button>
                <button onClick={login} type="button">Login</button>
                
                <p> {password}</p>
            </form></div>
    )
}

export default Login

