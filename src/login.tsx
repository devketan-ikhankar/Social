import { useState } from 'react';

const Login = ({ send }) => {
    const [credentials, setCredentials] = useState({ user: '', pass: '' });
    const [submittedData, setSubmittedData] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = () => {
        setSubmittedData(JSON.stringify(credentials));
         send(submittedData);
    };

    const handleReset = () => {
        setCredentials({ user: '', pass: '' });
        setSubmittedData('');
        
    };

  
    return (
        <div>
            <h1>Login Form</h1>
            <p>Username: {credentials.user}</p>
            <p>Password: {credentials.pass}</p>

            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="user"
                        value={credentials.user}
                        onChange={handleChange}
                        placeholder="Enter your username"
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="pass"
                        value={credentials.pass}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </label>
                <br />
                <button type="button" onClick={handleReset}>Reset</button>
                <button type="button" onClick={handleLogin}>Login</button>
               

                <p>{submittedData}</p>
            </form>
        </div>
    );
};

export default Login;
