import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const {handelAddToCart, product} = props;
    const { img, name, price, seller, ratings } = product;
    

    // console.log(props)
    return (
        <div>
            <div className="col single-cart-style">
                <div className='card-text-content'>
                    <img src={img} alt="" />
                    <div className="card-body">
                        <h6 >{name}</h6>
                        <h6 >Price : ${price}</h6>
                        <p>Manufacturer : {seller}</p>
                        <p>Rating : {ratings} <small>start</small></p>
                    </div>
                </div>

                <div className="card-footer button-style d-flex align-items-center justify-content-center" onClick={()=> handelAddToCart(product)}>
                    <small className="me-3">Add to Cart</small>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </div>

            </div>
        </div>
    );
};

export default SingleProduct;