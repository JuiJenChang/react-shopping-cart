import React, { Component } from 'react';
import { FaTimes } from "react-icons/fa";
import './product.css';

class Product2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    image: "https://stockx.imgix.net/products/streetwear/Supreme-Bandana-Box-Logo-Hooded-Sweatshirt-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1576157450&w=1000",
                    name: "Box Logo Hoodie Grey",
                    price: "761.10",
                    quantity: 1,
                }
            ],
        }
    }
    addQuantity = () => {
        const add = this.state.items[0].quantity + 1;
        const newPrice = parseFloat(this.state.items[0].price) + 761.10;
        this.setState({
            items: [
                {
                    image: "https://stockx.imgix.net/products/streetwear/Supreme-Bandana-Box-Logo-Hooded-Sweatshirt-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1576157450&w=1000",
                    name: "Box Logo Hoodie Grey",
                    price: newPrice.toFixed(2),
                    quantity: add,
                }
            ]
        })
    }

    minusQuantity = () => {
        const minus = this.state.items[0].quantity - 1;
        const newPrice = parseFloat(this.state.items[0].price) - 761.10;
        this.setState({
            items: [
                {
                    image: "https://stockx.imgix.net/products/streetwear/Supreme-Bandana-Box-Logo-Hooded-Sweatshirt-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1576157450&w=1000",
                    name: "Box Logo Hoodie Grey",
                    price: newPrice.toFixed(2),
                    quantity: minus,
                }
            ]
        })
    }
    render() {
        return (
            <div>
                {this.state.items.map((item, i) =>
                    <li key={i} className="product-item" >
                        <img src={item.image} className="product-img" />
                        <div>
                            <div className="product-item-name" >
                                <h4>{item.name}</h4>
                            </div>
                            <div className="product-item-quantity" >
                                Quantity: {item.quantity}
                            </div>
                        </div>
                        <div className="product-item-change" >
                            <FaTimes className="product-item-cancel" />
                            <div className="product-item-price" >
                                $ {item.price}
                            </div>
                            <div className="product-add-minus" >
                                <div className="product-item-minus" onClick={this.minusQuantity} >-</div>
                                <div className="product-item-add" onClick={this.addQuantity} >+</div>
                            </div>
                        </div>
                    </li>
                )
                }
            </div>
        );
    }
}

export default Product2;