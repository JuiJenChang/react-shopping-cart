import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { db } from '../firebase';

const EditProfile = () => {
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [UsernameError, setUsernameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const dataId = localStorage.dataId;

  const updateProfile = async (username, phone, address) => {
    dispatch({ type: "SET_OPENLOADING", payload: true })
    try {
      await db.collection('users')
        .doc(dataId)
        .update({
          username: username,
          phone: phone,
          address: address
        })
      setUsername('');
      setPhone('');
      setAddress('');
      history.push('/pages/member')
    } catch(err) {
      console.error(err)
    } finally {
      dispatch({ type: "SET_OPENLOADING", payload: false })
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUsernameError(false);
    setPhoneError(false);
    setAddressError(false);
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
    updateProfile(username, phone, address);
  };

  useEffect(() =>{
    setUsername(location.state.data.username);
    setPhone(location.state.data.phone);
    setAddress(location.state.data.address);
  }, [])

  return (
    <EditContainer>
      <EditContent>
        <h2>EDIT PROFILE</h2>
        <EditForm autoComplete="off" onSubmit={handleSubmit}>
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

export default EditProfile;

const EditContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EditContent = styled.div`
  width: 50%;
  height: 60%;
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
