import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import styled from "styled-components";
import { FaTrashAlt } from 'react-icons/fa';
import { productList } from '../utils/productList';

const Cart = () => {

  return (
    <CartContainer>
      {productList.map((item, i) => (
        <Content key={i}>
          <img src={item.img} />
          <Detail>
            <div>
              <h3>{item.name}</h3>
              <span>$ {item.price}</span>
            </div>
            <Icon>
              <FaTrashAlt style={iconStyle} />
            </Icon>
          </Detail>
        </Content>
      ))}
      <CheckContent>
        <button>CHECKOUT</button>
      </CheckContent>
    </CartContainer>
  );
}

export default Cart;

const iconStyle = { fontSize: "1.5em" }

const CartContainer = styled.div`
  padding: 3rem 12rem;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 150px;
  img {
    width: 15%;
    height: 100%;
  }
`
const Detail = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 50px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
  }
`
const Icon = styled.span`
  cursor: pointer;
`
const CheckContent = styled.div`
  border-top: 3px solid #3D4858;
  padding-top: 10px;
  button {
    background: #fff;
    color: #3D4858;
    cursor: pointer;
    height: 30px;
    border-radius: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-weight: 600;
    float: right;
  }
`