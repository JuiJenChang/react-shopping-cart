import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import styled from "styled-components";

const ProductDetail = () => {
  let location = useLocation();

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

  useEffect(() =>{
    console.log(location.pathname)
    console.log(location.search)
    console.log(location.state.detail)
  }, [])

  return (
    <ProductDetailContainer>
      <ProductImage src={location.state.detail.img} />
      <DetailContent>
        <h2>{location.state.detail.name}</h2>
        <h3>$ {location.state.detail.price}</h3>
        <h3>SIZE(CM)</h3>
        <SizeContent>
          {sizeList.map((item, i) => (
            <button key={i}>{item}</button>
          ))}
        </SizeContent>
      </DetailContent>
    </ProductDetailContainer>
  );
}

export default ProductDetail;

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 10rem;
`
const ProductImage = styled.img`
  width: 50%;
`
const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
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