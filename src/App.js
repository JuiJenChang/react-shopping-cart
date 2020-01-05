import React, { Component } from 'react';
import './App.css';
import ProductCart from './component/Cart/ProductCart';
import Product from './component/product/product';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      amount: 0,
      quantity: 1,
    }
  }

  addProduct = (item) => {
    const productList = [...this.state.items, item];
    const addAmount = this.state.amount + 1;
    this.setState({
      items: productList,
      amount: addAmount,
    })
  }

  deleteProduct = (e) => {
    const newLsit = this.state.items.filter((item, i) => {
      return i !== e;
    })
    const minusAmount = this.state.amount - 1;
    this.setState({
      items: newLsit,
      amount: minusAmount,
    })
  }

  addQuantity = () => {
    const addQuantity = this.state.quantity + 1;
    this.setState({
      quantity: addQuantity,
    })
  }

  minusQuantity = () => {
    const minusQuantity = this.state.quantity - 1;
    this.setState({
      quantity: minusQuantity,
    })
  }

  render() {
    return (
      <div className="App-content" >
        <Product
          addProduct={this.addProduct}
        />
        <ProductCart 
          items={this.state.items}
          amount={this.state.amount}
          quantity={this.state.quantity}
          deleteProduct={this.deleteProduct}
          addQuantity={this.addQuantity}
          minusQuantity={this.minusQuantity}
        />
      </div>
    );
  }
}

export default App;
