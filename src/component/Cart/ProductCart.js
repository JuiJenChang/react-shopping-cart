import React, { Component } from 'react';
import './ProductCart.css';
import { TiShoppingCart } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

class ProductCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
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
                            {this.props.items.map((item, i) =>
                                <li key={i} className="cart-item" >
                                    <img src={item.image} className="cart-img" />
                                    <div>
                                        <div className="cart-item-name" >
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div className="cart-item-quantity" >
                                            Quantity: {this.props.quantity}
                                        </div>
                                    </div>
                                    <div className="cart-item-change" >
                                        <FaTimes className="cart-item-cancel" onClick={() => this.props.deleteProduct(i)} />
                                        <div className="cart-item-price" >
                                            $ {item.price}
                                        </div>
                                        <div className="cart-add-minus" >
                                            <div className="cart-item-minus" onClick={this.props.minusQuantity} >-</div>
                                            <div className="cart-item-add" onClick={this.props.addQuantity} >+</div>
                                        </div>
                                    </div>
                                </li>
                            )
                            }
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