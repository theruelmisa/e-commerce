import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import {  
    Navbar,
    Products
} from './components';

const App = () => {
    const [ products, setProducts ] = useState([]);

    useEffect( () => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await commerce.products.list();
        setProducts(response.data); 
        return response;
    }

    console.log(products);

    return (
        <>
            <Navbar />
            <Products />
        </>
    )
}

export default App

// TODO:

// ADD PRODUCTS TO COMMERCE.JS (at least 9)
