import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQuantity, onRemoveFromCart, onEmptyCart }) => {
    const classes = useStyles();

    // Functions that return JSX so you can call it like sub components
    const EmptyCart = () => (
        <Typography variant="subtitle1">
            Your shopping cart is empty. <Link to="/" className={ classes.link }>Continue shopping</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                { cart.line_items.map( item => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem 
                            item={ item } 
                            onUpdateCartQuantity={ onUpdateCartQuantity }
                            onRemoveFromCart={ onRemoveFromCart }
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={ classes.cardDetails }>
                <Typography variant="h4">
                    Subtotal: { cart.subtotal.formatted_with_symbol }
                </Typography>
                <div>
                    <Button 
                        className={ classes.emptyButton } 
                        size="large" 
                        type="button" 
                        variant="contained" 
                        color="secondary" 
                        onClick={ onEmptyCart }
                    >
                        Empty Cart
                    </Button>
                    <Button className={ classes.checkoutButton } size="large" type="button" variant="contained" color="primary">
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={ classes.toolbar }/>
            <Typography className={ classes.title } variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
};

export default Cart;
