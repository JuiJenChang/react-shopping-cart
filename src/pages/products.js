import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import styled from "styled-components";
import { productList } from '../utils/productList';

const Products = () => {
  let history = useHistory();

  const linkToProductDetail = (item) => {
    history.push({
      pathname: '/pages/productDetail',
      search: `?id=${item.id}`,
      state: { detail: item }
    })
  }

  return (
    <ProductsContainer>
      {productList.map((item, i) => (
        <Card key={i}>
          <CardContent>
            <img src={item.img} alt=""/>
            <div>
              <h3>{item.name}</h3>
              <span>$ {item.price}</span>
            </div>
          </CardContent>
          <CardFooter>
            <button onClick={(e) => {
              e.preventDefault();
              linkToProductDetail(item)
            }}>PICK</button>
          </CardFooter>
        </Card>
      ))}
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 300px);
  padding: 2rem;
`
const Card = styled.div`
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  background: #3D4858;
  margin-bottom: 20px;
`
const CardContent = styled.div`
  img {
    width: 100%;
    height: 250px;
    border-radius: 5px 5px 0 0;
  }
  div {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 10px;
    h3 {
      margin-bottom: 10px;
    }
  }
`
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
  padding-right: 10px;
  button{
    cursor: pointer;
    color: #3D4858;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    height: 30px;
  }
`
