import React from 'react';
import Product from './Product/Product';

// Mock products for now
const products = [
    { 
        id: 1, 
        name: 'Mouse', 
        description: 'Wireless mouse.', 
        price: 80,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.G3HnoocCQSDaqN3Tgb8IBgHaHa%26pid%3DApi&f=1'
    },
    { 
        id: 2, 
        name: 'Plant', 
        description: 'Big house plant.', 
        price: 45,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Nqf1MLp7n42z1H_3sgEM0QHaHa%26pid%3DApi&f=1'
    }
];


const Products = () => {


    const renderedProducts = products.map( product => {
        return(
            <div key={product.id}>
                <Product 
                    name={product.name} 
                    description={product.description} 
                    price={product.price}
                    image={product.image}
                />
            </div>
        )
    });

    return (
        <div>
            { renderedProducts }
        </div>
    )
}

export default Products;
