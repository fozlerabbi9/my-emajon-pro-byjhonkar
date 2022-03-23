import React, { useEffect, useState } from 'react';
import './Shopping.css';
import SingleProduct from './SingleProductFile/SingleProduct';

const Shopping = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);   //( cool )new useSet for show cart ditles with evenHendler

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='px-4 main-shop-container-style  pt-5'>
            <div className="products-container pt-4">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 main-row-card-section my-3 mx-4">
                    {
                        products.map((product => <SingleProduct
                            product={product}
                            key={product.id}
                            handelAddToCart={handelAddToCart}
                        ></SingleProduct>))
                    }
                </div>

            </div>

            <div className="cart-container pt-4">
                <h4>order summary</h4>
                <p>cart length {cart.length}</p>
                {/* <h2>name : {name}</h2> */}

            </div>


        </div>
    );
};

export default Shopping;