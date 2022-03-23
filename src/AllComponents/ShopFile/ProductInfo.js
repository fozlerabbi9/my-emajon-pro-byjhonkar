import React from 'react';
import './ProductInfo.css';

const ProductInfo = (props) => {
    const { cart } = props;

    let totalPrice = 0;
    for (let product of cart) {
        totalPrice = totalPrice + product.price;
    }

    return (
        <div>
            <h4>order summary</h4>
            <p>cart length {cart.length}</p>
            <p>Total Price : {totalPrice}</p>
        </div>
    );
};

export default ProductInfo;

