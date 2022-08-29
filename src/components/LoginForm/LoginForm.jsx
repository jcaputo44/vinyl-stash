import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const demoCreds = {
    email: process.env.REACT_APP_USER,
    password: process.env.REACT_APP_PASSWORD
  }

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt, isDemoUser) {
    evt.preventDefault();
    if (isDemoUser){
      try {
        const demoUser = await usersService.login(demoCreds);
        setUser(demoUser);
      } catch {
        setError('Log In Failed - Try Again');
      }
    } else {
      try {
        const user = await usersService.login(credentials);
        setUser(user);
      } catch {
        setError('Log In Failed - Try Again');
      }
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">Log In</button>
        </form>
        <br />
          <button className="demoButt" onClick={(evt)=>handleSubmit(evt, true)}>Log In Demo</button>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}