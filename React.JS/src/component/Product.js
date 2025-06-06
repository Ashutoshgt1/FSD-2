import React from "react";
function Product(props) {
    return (
        <div>
            <h1>{props.productname}</h1>
            <p>Price: ${props.price}</p>
        </div>
    );
}

export default Product;
