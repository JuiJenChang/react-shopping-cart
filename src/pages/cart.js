import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartList);
  const [total, setTotal] = useState(0);
  const newTotal = cartList.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const removeProduct = item => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: item
    })
  }

  useEffect(() => {
    setTotal(newTotal);
  }, [cartList]);

  if (cartList.length === 0) {
    return <EmptyCart>
      There are no items in the shopping cart
    </EmptyCart>
  } else {
    return (
      <CartContainer>
        {cartList.map((item, i) => (
          <Content key={i}>
            <img src={item.img} />
            <Detail>
              <span>SIZE：{item.size} CM</span>
              <div>
                <h3>{item.name}</h3>
                <span>$ {item.price}</span>
              </div>
              <Icon>
                <FaTrashAlt
                  style={iconStyle} 
                  onClick={(e) => {
                    e.preventDefault();
                    removeProduct(item)
                  }}
                />
              </Icon>
            </Detail>
          </Content>
        ))}
        <CheckContent>
          <div>
            <span>total：{total}</span>
            <button>CHECKOUT</button>
          </div>
        </CheckContent>
      </CartContainer>
    );
  }
}

export default Cart;

const iconStyle = { fontSize: "1.2rem" }

const EmptyCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CartContainer = styled.div`
  padding: 3rem 12rem;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 150px;
  width: 100%;
  img {
    width: 15%;
    height: 100%;
  }
`
const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  div {
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    h3 {
      width: 225px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`
const Icon = styled.span`
  cursor: pointer;
`
const CheckContent = styled.div`
  border-top: 3px solid #3D4858;
  padding-top: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    button {
      background: #fff;
      color: #3D4858;
      cursor: pointer;
      height: 30px;
      border-radius: 0.25rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      font-weight: 600;
      margin-top: 10px;
    }
  }
`