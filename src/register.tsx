import { useState } from 'react';

const Register = ({ send1 }) => {
  const [reguser, setReguser] = useState({
    user: '',
    pass: '',
    cpass: '',
    email: '',
    name: ''
  });

  const [submittedData, setSubmittedData] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReguser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = () => {
    const jsonData = JSON.stringify(reguser);
    setSubmittedData(jsonData);
    send1(jsonData); // Send the data
  };

  const handleReset = () => {
    setReguser({
      user: '',
      pass: '',
      cpass: '',
      email: '',
      name: ''
    });
    setSubmittedData('');
  };

  return (
    <div>
      <h1>Register Form</h1>

      <p>Name: {reguser.name}</p>
      <p>Email: {reguser.email}</p>
      <p>Username: {reguser.user}</p>
      <p>Password: {reguser.pass}</p>
      <p>Confirm Password: {reguser.cpass}</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={reguser.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={reguser.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
        <br />

        <label>
          Username:
          <input
            type="text"
            name="user"
            value={reguser.user}
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
            value={reguser.pass}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </label>
        <br />

        <label>
          Confirm Password:
          <input
            type="password"
            name="cpass"
            value={reguser.cpass}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
        </label>
        <br />

        <button type="button" onClick={handleReset}>Reset</button>
        <button type="button" onClick={handleRegister}>Register</button>

        <p>{submittedData}</p>
      </form>
    </div>
  );
};

export default Register;
