import React, { Component } from 'react'

export default class Products extends Component {
    
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(items =>(
                    <li key={items.id}>
                        <div className="product">
                            <a href={"#" + items.id}>
                                <img  className="image-product"src={items.image} alt={items.title}></img>
                                <p>{items.title}</p>
                            </a>
                            <p>{items.title}</p>
                            <div className="product-price">
                                <div>
                                    {items.price} $
                                </div>
                                <div className="buttonprimary">
                                <button >ADD TO CART</button>
                            </div>
                            </div>
                        </div>
                    </li>
                      

                    ))}
                </ul>
            </div>
        )
    }
}
