import React from 'react';
import { auth } from '../firebase';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from 'firebase/auth';

export const Login = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h1>Welcome to Messenger Chat App</h1>
        <div className='login-button google' onClick={() => signInWithRedirect(auth,new GoogleAuthProvider())}>
          <GoogleOutlined /> Sign In with Google
        </div>
        <br/><br/>
        <div className='login-button facebook' onClick={() => signInWithRedirect(auth,new FacebookAuthProvider())}>
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};
