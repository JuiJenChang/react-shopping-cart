import React, { Component } from 'react';

const productItem = [
    {
        image: "https://stockx.imgix.net/products/streetwear/Supreme-Bandana-Box-Logo-Tee-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1576782381&w=1000",
        name: "Box Logo Tee Grey",
        price: "355.00",
    },
    {
        image: "https://stockx.imgix.net/products/streetwear/Supreme-Bandana-Box-Logo-Hooded-Sweatshirt-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1576157450&w=1000",
        name: "Box Logo Hoodie Grey",
        price: "761.00",
    }
]

class Product extends Component {
    render() {
        return (
            <div>
                {productItem.map((item, i) =>
                    <li key={i}>
                        <img src={item.image} />
                        <div>
                            <div>
                                <h4>{item.name}</h4>
                            </div>
                        </div>
                        <div>
                            $ {item.price}
                        </div>
                        <button onClick={() => this.props.addProduct(item)} >Add to cart</button>
                    </li>
                )
                }
            </div>
        );
    }
}

export default Product;