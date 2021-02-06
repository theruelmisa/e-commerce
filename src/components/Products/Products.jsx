import React from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'swimsuit 1', description: 'one piece swimsuit.', price: '$65', image: 'https://images.unsplash.com/photo-1520065949650-380765513210?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80' },
    { id: 2, name: 'swimsuit 2', description: 'two piece swimsuit.', price: '$85', image: 'https://images.unsplash.com/photo-1522322904670-5cf2a8529d21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }
];

const Products = () => {

    const classes = useStyles();

    const renderedProducts = products.map( product => (

        <Grid key={ product.id } item xs={ 12 } sm= { 6 } md={ 4 } lg={ 3 }>
            <Product product={ product } />
        </Grid>   
    ));

    return (
        <main className={ classes.content }>
            <div className={ classes.toolbar } />
            <Grid container justify="center" spacing={ 4 }>
                { renderedProducts }
            </Grid>
        </main>
    )
}

export default Products
