import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <img src="https://i.imgur.com/HxPUVsp.png" alt="vinyl-stash" className="vslogo" />
      <div className="flex-ctr-ctr vauth-square">
        {showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
      </div>
      <button className="sign-butt" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Already A Member? Log In!' : 'Not A Mamber? Sign Up!'}</button>
    </main>
  );
}