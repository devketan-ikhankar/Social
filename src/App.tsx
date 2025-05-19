import { useState } from 'react';
import Login from './login';
import Register from './register';

const App = () => {
  const [loginData, setLoginData] = useState('');
  const [registerData, setRegisterData] = useState('');
  const [toggle, setToggle] = useState(false);
  const helper = (data: void) => {
    setToggle(!toggle);
  }

  return (
    <div>
      { !toggle && <div>
      <h2>Login Output:</h2>
      <p>{loginData}</p>
      <Login send={setLoginData} answer={helper}/></div>}

      {toggle && <div>
        <h2>Register Output:</h2>
        <p>{registerData}</p>
        <Register send1={setRegisterData} answer={helper} />
      </div>}
    </div>
  );
};

export default App;
