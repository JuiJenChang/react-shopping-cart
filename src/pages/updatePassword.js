import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { auth } from '../firebase';

const UpdatePassword = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [checkPasswordError, setCheckPasswordError] = useState(false);

  const update = (password) => {
    dispatch({ type: "SET_OPENLOADING", payload: true })
    auth.currentUser.updatePassword(password).then(() => {
      auth.signOut();
      localStorage.clear();
      history.push('/pages/home');
      alert('update successful, please login again');
    }).catch((err) => {
      console.error(err)
    }).finally(() => {
      dispatch({ type: "SET_OPENLOADING", payload: false })
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPasswordError(false);
    setCheckPasswordError(false);
    if (password === '') {
      setPasswordError(true);
      return;
    };
    if (checkPassword === '') {
      setCheckPasswordError(true);
      return;
    };
    if (password !== checkPassword) {
      alert('the two passwords entered are different')
    } else {
      update(password);
    }
  };

  return (
    <EditContainer>
      <EditContent>
        <h2>UPDATE PASSWORD</h2>
        <EditForm autoComplete="off" onSubmit={handleSubmit}>
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
            value={checkPassword}
            onChange={e => setCheckPassword(e.target.value)}
            label="CHECK PASSWORD"
            type="password"
            fullWidth
            error={checkPasswordError}
            helperText={checkPasswordError ? 'Required' : ''}
          />
          <Formfooter>
            <button type="submit">UPDATE</button>
            <button type="button" onClick={e => {
              e.preventDefault();
              history.goBack();
            }}>CANCEL</button>
          </Formfooter>
        </EditForm>
      </EditContent>
    </EditContainer>
  );
}

export default UpdatePassword;

const EditContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EditContent = styled.div`
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
const EditForm = styled.form`
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
