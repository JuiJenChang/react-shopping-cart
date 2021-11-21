import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";

const ProductDetail = () => {
  const sizeList = [
    "24",
    "24.5",
    "25",
    "25.5",
    "26",
    "26.5",
    "27",
    "27.5",
    "28",
    "28.5",
    "29",
    "29.5",
  ]
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  
  useEffect(() =>{
    setProduct(location.state.detail)
  }, [])

  const addToCart = e => {
    e.preventDefault();
    if (product.size !== "") {
      dispatch({
        type: "ADD_TO_CART",
        payload: product
      })
      history.push('/pages/cart')
    } else {
      return
    }
  }
  
  return (
    <ProductDetailContainer>
      <ProductImage src={location.state.detail.img} />
      <DetailContent>
        <h2>{location.state.detail.name}</h2>
        <h2>$ {location.state.detail.price}</h2>
        <span>SIZE(CM)</span>
        <SizeContent>
          {sizeList.map((item, i) => (
            <button
              key={i}
              onClick={(e) =>{
                e.preventDefault()
                setProduct({...product, size: item})
              }}
            >
              {item}
            </button>
          ))}
        </SizeContent>
        <AddContent>
          <button onClick={addToCart}>ADD TO CART</button>
        </AddContent>
      </DetailContent>
    </ProductDetailContainer>
  );
}

export default ProductDetail;

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 12rem;
  height: 100%;
`
const ProductImage = styled.img`
  width: 50%;
`
const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 24px;
  }
  span {
    margin-bottom: 1rem;
  }
`
const SizeContent = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 70px);
  height: 200px;
  width: 300px;
  button {
    width: 70px;
    height: 60px;
    border-radius: 0.25rem;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #3D4858;
      color: #fff;
    }
    &:focus {
      background: #3D4858;
      color: #fff;
    }
  }
`
const AddContent = styled.div`
  border-top: 3px solid #3D4858;
  padding-top: 1rem;
  margin-top: 1rem;
  button {
    background: #fff;
    color: #3D4858;
    cursor: pointer;
    height: 30px;
    border-radius: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-weight: 600;
  }
`