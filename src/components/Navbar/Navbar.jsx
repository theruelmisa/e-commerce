import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={ classes.appBar } color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={ classes.title } color="inherit">
                        Swimcommerce
                    </Typography>
                    <div className={ classes.grow } />
                    <div className={ classes.button }>
                        {
                            location.pathname === '/' && (
                                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" className={ classes.iconButton }>
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            ) 
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar;