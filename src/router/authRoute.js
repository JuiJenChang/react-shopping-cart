import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

const AuthRouter = (props) => {
  const { routes } = props
  let location = useLocation();
  const { pathname } = location;
  const userId = localStorage.getItem('userId')
  const targetRoutes = routes.find(item => item.path === pathname)

  if (targetRoutes && !targetRoutes.auth && !userId) {
    return (
      <ViewContainer>
        <Route path={targetRoutes.path} component={targetRoutes.component} />
      </ViewContainer>
    )
  }
  if (userId) {
    if (pathname === '/pages/login') {
      return <Redirect to="/pages/home" />
    } else {
      if (targetRoutes) {
        return (
          <ViewContainer>
            <Route path={targetRoutes.path} component={targetRoutes.component} />
          </ViewContainer>
        )
      } else {
        return (
          <Route exact path="*">
            <Redirect to="/pages/home" />
          </Route>
        )
      }
    }
  } else {
    if (targetRoutes && targetRoutes.auth) {
      alert('Please login first')
      return <Redirect to="/pages/login" />
    } else {
      return (
        <Route exact path="*">
          <Redirect to="/pages/home" />
        </Route>
      )
    }
  }
};

export default AuthRouter;

const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
`