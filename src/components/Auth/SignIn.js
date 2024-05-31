import React from 'react';
import { useAuth } from '../../context/AuthContext';

const SignIn = () => {
  const { signInWithGoogle, error } = useAuth();

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignIn;
