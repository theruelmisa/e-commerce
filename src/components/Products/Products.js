import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

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
    const classes = useStyles();

    return (  
        <main className={ classes.content }> 
            <div className={ classes.toolbar } />
            <Grid container justify="center" spacing={6}>
                {
                    products.map( product => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product 
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    );
}

export default Products;