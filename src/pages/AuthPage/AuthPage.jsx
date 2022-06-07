import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1 className="page-title">Vinyl Stash</h1>
      <br />
        <div className="flex-ctr-ctr">
        { showSignUp ?
            <LoginForm setUser={setUser} />
            :
            <SignUpForm setUser={setUser} />
          }
        </div>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Not A Mamber? Sign Up!' : 'Already A Member? Log In!'}</button>
    </main>
  );
}