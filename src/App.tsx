import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const App = () => {
  const [loginData, setLoginData] = useState('');
  const [registerData, setRegisterData] = useState('');

  return (
    <div>
      <h2>Login Output:</h2>
      <p>{loginData}</p>
      <Login send={setLoginData} />

      <h2>Register Output:</h2>
      <p>{registerData}</p>
      <Register send1={setRegisterData} />
    </div>
  );
};

export default App;
