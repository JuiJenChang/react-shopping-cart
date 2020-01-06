import React, { Component } from 'react';
import './ProductCart.css';
import { TiShoppingCart } from "react-icons/ti";
import Product from '../product/product';
import Product2 from '../product/product2';

class ProductCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            total: "1116.25",
        }
    }

    openCart = () => {
        this.setState({
            open: true,
        })
    }

    closeCart = () => {
        this.setState({
            open: false,
        })
    }

    render() {
        return (
            <div>
                {this.state.open ?
                    <div className="float-cart" >
                        <div onClick={this.closeCart} className="close-cart" >X</div>
                        <div>
                            <div className="cart-title" >
                                <TiShoppingCart className="inside-logo" />
                                <div className="inside-product-total" >{this.props.amount}</div>
                                <span>Cart</span>
                            </div>
                            <Product />
                            <Product2 />
                            <div className="cart-footer" >
                                <div className="cart-total" >
                                    <span className="cart-footer-span1" >SUBTOTAL</span>
                                    <span className="cart-footer-span2" >$ {this.state.total}</span>
                                </div>
                                <div className="cart-button" >CHECKOUT</div>
                            </div>
                        </div>
                    </div> :
                    <div className="open-cart" onClick={this.openCart} >
                        <TiShoppingCart className="cart-logo" />
                        <div className="product-total" >{this.props.amount}</div>
                    </div>
                }
            </div>
        );
    }
}

export default ProductCart;