import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";
import Products from './pages/products';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';

function App() {
  return (
    <div>
      <Header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pages/products">Products</Link>
          </li>
          <li>
            <Link to="/">Member</Link>
          </li>
        </ul>
      </Header>
      <Main>
        <Route path="/pages/products" component={Products} />
        <Route path="/pages/ProductDetail" component={ProductDetail} />
        <Route path="/pages/Cart" component={Cart} />
      </Main>
    </div>
  );
}

export default App;

const Header = styled.header`
  width: 100%;
  height: 80px;
  background: #3D4858;
  padding-left: 6rem;
  position: fixed;
  top: 0;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 30%;
    a {
      border-radius: 10px 10px;
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
    }
    a:hover {
      background: #64758E;
    }
  }
`
const Main = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  overflow: scroll;
  margin-top: 80px;
  background: #ECECEC;
`