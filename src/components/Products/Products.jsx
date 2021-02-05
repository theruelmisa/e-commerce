import React from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product/Product';

const products = [
    { id: 1, name: 'swimsuit 1', description: 'one piece swimsuit.', price: '$65', image: '' },
    { id: 2, name: 'swimsuit 2', description: 'two piece swimsuit.', price: '$85', image: '' }
];

const Products = () => {

    const renderedProducts = products.map( product => (

        <Grid key={ product.id } item xs={ 12 } sm= { 6 } md={ 4 } lg={ 3 }>
            <Product product={ product } />
        </Grid>   
    ));

    return (
        <main>
            <Grid container justify="center" spacing={ 4 }>
                
            </Grid>
        </main>
    )
}

export default Products
