import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

const Product = ({name, description, image, price }) => {
    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{name}</h3>
                <p>$ {price}</p>
                <p>{description}</p>
                <button type="click">
                    <MdAddShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default Product;


// Create a card component for product details
// Design card component