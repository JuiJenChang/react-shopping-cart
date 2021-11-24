import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { auth } from '../firebase';

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const signIn = async (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('userId', res.user.uid);
      // localStorage.setItem('loginStatus', true);
      setEmail('');
      setPassword('');
      dispatch({ type: "SET_LOGINSTATUS", payload: true });
      history.push('/');
    }).catch(err => {
      console.log(err)
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setEmailError(false)
    setPasswordError(false)
    if (email === '') {
      setEmailError(true);
      return;
    }
    if (password === '') {
      setPasswordError(true);
      return;
    }
    signIn(email, password);
  };

  const linkToRegister = e => {
    e.preventDefault();
    history.push('/pages/register')
  }

  return (
    <LoginContainer>
      <LoginContent>
        <h2>LOGIN</h2>
        <LoginForm autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            label="E-MAIL"
            fullWidth
            error={emailError}
            helperText={emailError ? 'Required' : ''}
          />
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            label="Password"
            type="password"
            fullWidth
            error={passwordError}
            helperText={passwordError ? 'Required' : ''}
          />
          <Formfooter>
            <button type="submit">LOGIN</button>
            <button type="button" onClick={linkToRegister}>REGISTER</button>
          </Formfooter>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoginContent = styled.div`
  width: 50%;
  height: 50%;
  background: #fff;
  padding: 1rem 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 700;
    font-size: 24px;
  }
`
const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const CardContent = styled.div`
  img {
    width: 100%;
    height: 250px;
    border-radius: 5px 5px 0 0;
  }
  div {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 10px;
    h3 {
      margin-bottom: 10px;
    }
  }
`
const Formfooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  button{
    cursor: pointer;
    color: #fff;
    background: #3D4858;
    border-radius: 10px;
    width: 15%;
    height: 40px;
    &:hover {
      color: #3D4858;
      background: #eeeeee;
    }
  }
`
