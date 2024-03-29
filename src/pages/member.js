import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { db } from '../firebase';
import { FiEdit } from 'react-icons/fi';
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

const Member = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async() => {
    dispatch({ type: "SET_OPENLOADING", payload: true })
    const userId = localStorage.userId
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", userId)
        .get();
      const data = query.docs[0].data();
      setUserInfo(data)
      localStorage.setItem("dataId", query.docs[0].id)
    } catch(err) {
      console.log(err)
    }
    finally {
      dispatch({ type: "SET_OPENLOADING", payload: false })
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  const linkToEditProfile = () => {
    history.push({
      pathname: '/pages/editProfile',
      state: { data: userInfo }
    })
  };

  const linkToUpdatePassword = () => {
    history.push({
      pathname: '/pages/updatePassword',
      state: { data: userInfo }
    })
  };

  return (
    <ProfileContainer>
      <ProfileForm>
        <h2>MEMBER PROFILE</h2>
        <ProfileContent>
          <ProfileItem>
            <h4>USERNAME : </h4>
            <span>{userInfo.username}</span>
          </ProfileItem>
          <ProfileItem>
            <h4>MAIL : </h4>
            <span>{userInfo.email}</span>
          </ProfileItem>
          <ProfileItem>
            <h4>PHONE : </h4>
            <span>{userInfo.phone}</span>
          </ProfileItem>
          <ProfileItem>
            <h4>ADDRESS : </h4>
            <span>{userInfo.address}</span>
          </ProfileItem>
        </ProfileContent>
        <Formfooter>
          <EditContent onClick={linkToEditProfile}>
            <FiEdit />
            <span>PROFILE</span>
          </EditContent>
          <EditContent onClick={linkToUpdatePassword}>
            <FiEdit />
            <span>PASSWORD</span>
          </EditContent>
        </Formfooter>
      </ProfileForm>
    </ProfileContainer>
  );
}

export default Member;

const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProfileForm = styled.div`
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
const ProfileContent = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  h4 {
    font-weight: 600;
    font-size: 16px;
  }
  span {
    font-size: 14px;
    margin-left: 10px;
  }
`
const Formfooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
const EditContent = styled.div`
  width: 10rem !important;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
`