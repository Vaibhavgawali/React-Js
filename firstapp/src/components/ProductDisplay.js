import React from "react";
import './Product.css';

const ProductDisplay=(props)=>{
    // console.log("Product Data",props)
    const renderProduct=props.products.map((product)=>{
        return(
            <div className="card" key={product.id}>
                <img src={product.image} alt={product.name}/>
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.item}</p>
                    <p>Rs. {product.cost}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="main">
            {renderProduct}
        </div>
    )
}
export default ProductDisplay;