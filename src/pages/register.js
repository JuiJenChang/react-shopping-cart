import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { db, auth } from '../firebase';

const Register = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [UsernameError, setUsernameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const register = async (email, password, username, phone, address) => {
    dispatch({ type: "SET_OPENLOADING", payload: true })
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection('users').add({
        uid: user.uid,
        email,
        username,
        phone,
        address
      })
      setEmail('');
      setPassword('');
      setUsername('');
      setPhone('');
      setAddress('');
      history.push('/pages/login')
      dispatch({ type: "SET_OPENLOADING", payload: false })
    } catch(err) {
      dispatch({ type: "SET_OPENLOADING", payload: false })
      console.error(err)
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    setUsernameError(false);
    setPhoneError(false);
    setAddressError(false);
    if (email === '') {
      setEmailError(true);
      return;
    };
    if (password === '') {
      setPasswordError(true);
      return;
    };
    if (username === '') {
      setUsernameError(true);
      return;
    };
    if (phone === '') {
      setPhoneError(true);
      return;
    };
    if (address === '') {
      setAddressError(true);
      return;
    };
    register(email, password, username, phone, address);
  };

  return (
    <RegisterContainer>
      <RegisterContent>
        <h2>REGISTER</h2>
        <RegisterForm autoComplete="off" onSubmit={handleSubmit}>
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
            label="PASSWORD"
            type="password"
            fullWidth
            error={passwordError}
            helperText={passwordError ? 'Required' : ''}
          />
          <TextField
            value={username}
            onChange={e => setUsername(e.target.value)}
            label="USERNAME"
            fullWidth
            error={UsernameError}
            helperText={UsernameError ? 'Required' : ''}
          />
          <TextField
            value={phone}
            onChange={e => setPhone(e.target.value)}
            label="PHONE"
            fullWidth
            error={phoneError}
            helperText={phoneError ? 'Required' : ''}
          />
          <TextField
            value={address}
            onChange={e => setAddress(e.target.value)}
            label="ADDRESS"
            fullWidth
            error={addressError}
            helperText={addressError ? 'Required' : ''}
          />
          <Formfooter>
            <button type="submit">SUBMIT</button>
            <button>CANCEL</button>
          </Formfooter>
        </RegisterForm>
      </RegisterContent>
    </RegisterContainer>
  );
}

export default Register;

const RegisterContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RegisterContent = styled.div`
  width: 50%;
  height: 70%;
  background: #fff;
  padding: 1rem 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RegisterForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
