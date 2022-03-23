import React from 'react';
import './ProductInfo.css';

const ProductInfo = (props) => {
    const { cart } = props;
    console.log(cart)

    let totalPrice = 0;
    let shipping = 0;
    for (let product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (totalPrice * 5 / 100).toFixed(2);
    const grandTotal = totalPrice + shipping + parseInt(tax);

    return (
        <div>
            <h4>order summary</h4>
            <p>cart length : {cart.length}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <p>Grand Total $ : {grandTotal} </p>

        </div>
    );
};

export default ProductInfo;

