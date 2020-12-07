import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div className="products">
                {this.props.products.map((product)=>
                <li key={product._id}>
                    <div className="product">
                        <a href={"#"+ product._id}>
                            <img src={product.image} alt={product.title}/>
                <p>{product.title} </p>
                        </a>
                        <div className="product-price">
                <div>{product.price}</div>
                            <button className="button-primary">Add to the card</button>
                        </div>
                    </div>
                </li>
                
                )}
                
            </div>
        )
    }
}
