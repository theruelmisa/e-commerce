import React from 'react';
import { MdShoppingCart } from 'react-icons/md'

const Navbar = () => {
    return (
        <>
            <div>
                <h1>Pili Concept Logo</h1>
                <button type="click">
                    <MdShoppingCart />
                </button>
            </div>
        </>
    )
}

export default Navbar;

// Navbar area. Flex, spacebetween. button should have some notification of how many items are in cart (like in typical e-commerce)